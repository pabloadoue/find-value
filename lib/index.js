"use strict";
/**
 * findValue
 * Finds the value at given path in the specified object.
 *
 * @name findValue
 * @function
 * @param {Object} object The input object.
 * @param {String} path The path to the value you want to find.
 * @return {Anything} The path value.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function findValue(object, path) {
    var dotIndex = path.indexOf('.');
    // tslint:disable-next-line:no-bitwise
    if (!~dotIndex) {
        if (object === undefined || object === null) {
            return undefined;
        }
        return object[path];
    }
    var field = path.substring(0, dotIndex);
    var rest = path.substring(dotIndex + 1);
    if (object === undefined || object === null) {
        return undefined;
    }
    object = object[field];
    if (!rest) {
        return object;
    }
    return findValue(object, rest);
}
exports.default = findValue;
