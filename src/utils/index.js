// 返回任意数据类型的类型
export function getObjType(obj) {
    return Object.prototype.toString.call(obj);
}
/**********************PUBLIC FUNCTION END*****************************/


/**********************具体工具 FUNCTION START*************************/
// 是否为数组  Array
export function isArray(obj) {
    return getObjType(obj) == "[object Array]";
}
// 是否为字符串 String
export function isString(obj) {
    return getObjType(obj) == "[object String]";
}
// 是否为 undefined
export function isUndefined(obj) {
    return getObjType(obj) == "[object Undefined]";
}
// 是否为数字 number
export function isNumber(obj) {
    return getObjType(obj) == "[object Number]";
}
// 是否为 Date
export function isDate(obj) {
    return getObjType(obj) == "[object Date]";
}
// 是否为 function
export function isFunction(obj) {
    return getObjType(obj) == "[object Function]";
}
// 是否为 null
export function isNull(obj) {
    return getObjType(obj) == "[object Null]";
}
// 是否为 Object
export function isObject(obj) {
    return getObjType(obj) == "[object Object]";
}