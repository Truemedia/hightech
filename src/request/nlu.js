const Request = require('./base');
const AbstractMethodUndefinedError = require('./../errors/AbstractMethodUndefined');

class Nlu extends Request
{
  constructor(data)
  {
    super(data);
  }

  /**
    * @abstract
    */
  get author()
  {
    return new AbstractMethodUndefinedError;
  }

  /**
    * @abstract
    */
  get channel()
  {
    return new AbstractMethodUndefinedError;
  }

  /**
    * @abstract
    */
  get content()
  {
    return new AbstractMethodUndefinedError;
  }

  /**
    * @abstract
    */
  get mentions()
  {
    return new AbstractMethodUndefinedError;
  }

  static fromJSON(data, stringified = true)
  {
    if (stringified) {
      data = JSON.parse(data);
    }
    return new this(data);
  }

  toJSON(stringify = true)
  {
    let {author, channel, content, mentions} = this;
    let req = {author, channel, content, mentions};
    return stringify ? JSON.stringify(req) : req;
  }
}

module.exports = Nlu;
