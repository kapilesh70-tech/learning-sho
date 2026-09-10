/** 404 handler for unknown routes. */
export function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
}

/** Central error handler — proper status codes, no stack leakage in production. */
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "Origin not allowed.",
    });
  }

  if (err.type === "entity.too.large") {
    return res.status(413).json({
      success: false,
      message: "Request body is too large.",
    });
  }

  if (err.type === "entity.parse.failed") {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON in request body.",
    });
  }

  const status = err.status || err.statusCode || 500;
  console.error(`[error] ${req.method} ${req.originalUrl}:`, err.message);
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  }

  res.status(status).json({
    success: false,
    message:
      status === 500
        ? "Something went wrong on our side. Please try again."
        : err.message,
  });
}
