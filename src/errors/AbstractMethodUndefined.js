class AbstractMethodUndefinedError extends Error {
  constructor (message = 'Abstract method not implemented', status) {
    super(message);
    this.code = 'HIGHTECH_ABSTRACT_METHOD_UNDEFINED';
    Error.captureStackTrace(this, this.constructor);
    this.status = status || 500;
  }
};

module.exports = AbstractMethodUndefinedError;
