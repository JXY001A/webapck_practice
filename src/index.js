import {
    isArray,
    isString,
    isUndefined,
    isNumber,
} from './utils/index';

function main() {
    let temp1 = [];
    // let temp2 = null;
    console.log(isArray(temp1));
    console.log(isString(temp1));
    console.log(isUndefined(temp1));
    console.log(isNumber(temp1));
}

main();
