
const DataNotFound = 404;
const BadRequest = 400;
const UnAuthorised = 401;
const DataConflict = 409;


class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
      this.code = BadRequest;

    }
  }

  class DatNotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = "DatNotFoundError";
      this.code = DataNotFound;

    }
  }

  class UnAuthorisedError extends Error {
    constructor(message) {
      super(message);
      this.name = "UnAuthorisedError";
      this.code = UnAuthorised;

    }
  }

  module.exports = {
    ValidationError,
    DatNotFoundError,
    UnAuthorisedError
  }