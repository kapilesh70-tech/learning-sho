/**
 * Minimal in-memory rate limiter (fixed window per IP).
 * Basic request protection with zero external dependencies —
 * swap for a store-backed limiter behind a load balancer.
 */
export function rateLimit({ windowMs = 60_000, max = 10 } = {}) {
  const hits = new Map();

  // Periodically drop expired windows so the map doesn't grow unbounded.
  const cleanup = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of hits) {
      if (now > entry.resetAt) hits.delete(key);
    }
  }, windowMs);
  cleanup.unref?.();

  return function rateLimiter(req, res, next) {
    const key = req.ip || "unknown";
    const now = Date.now();
    let entry = hits.get(key);

    if (!entry || now > entry.resetAt) {
      entry = { count: 0, resetAt: now + windowMs };
      hits.set(key, entry);
    }
    entry.count += 1;

    if (entry.count > max) {
      res.setHeader("Retry-After", Math.ceil((entry.resetAt - now) / 1000));
      return res.status(429).json({
        success: false,
        message: "Too many requests. Please try again in a minute.",
      });
    }
    next();
  };
}
