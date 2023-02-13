var crypto = require('crypto');

export const getRandomInt = (min: number, max: number) => {

    const BYTE_ARRAY = new BigUint64Array(1);
    crypto.getRandomValues(BYTE_ARRAY);

    let randomNum: any = '0.' + BYTE_ARRAY[0].toString();
    randomNum = Math.floor(randomNum * (max - min + 1)) + min;

    return randomNum;
}