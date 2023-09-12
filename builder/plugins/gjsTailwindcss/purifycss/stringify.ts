/**
 * Module dependencies.
 */
//@ts-ignore
import Compressed from "css/lib/stringify/compress";
//@ts-ignore
import Identity from "css/lib/stringify/identity";

/**
 * Stringfy the given AST `node`.
 *
 * Options:
 *
 *  - `compress` space-optimized output
 *  - `sourcemap` return an object with `.code` and `.map`
 *
 * @param {Object} node
 * @param {Object} [options]
 * @return {String}
 * @api public
 */

export default function (nodeL: any, options: any) {
  options = options || {};

  const compiler = options.compress
    ? new Compressed(options)
    : new Identity(options);
  //@ts-ignore
  return compiler.compile(node);
}
