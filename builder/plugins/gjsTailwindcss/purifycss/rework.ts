/**
 * Module dependencies.
 */
//@ts-ignore
import parse from "css/lib/parse";
import stringify from "./stringify";

/**
 * Initialize a new stylesheet `Rework` with `str`.
 *
 * @param {String} str
 * @param {Object} options
 * @return {Rework}
 * @api public
 */
//@ts-ignore
export default function rework(str, options) {
  return new Rework(parse(str, options));
}

/**
 * Initialize a new stylesheet `Rework` with `obj`.
 *
 * @param {Object} obj
 * @api private
 */
//@ts-ignore
class Rework {
  //@ts-ignore
  constructor(obj) {
    //@ts-ignore
    this.obj = obj;
  }
  /**
   * Use the given plugin `fn(style, rework)`.
   *
   * @param {Function} fn
   * @return {Rework}
   * @api public
   */ //@ts-ignore
  use(fn) {
    //@ts-ignore
    fn(this.obj.stylesheet, this);
    return this;
  }
  //@ts-ignore
  toString(options) {
    options = options || {}; //@ts-ignore
    return stringify(this.obj, options);
  }
}
