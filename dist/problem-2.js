"use strict";
{
    //
    function removeDuplicates(array) {
        const newArray = [];
        for (let i of array) {
            if (!newArray.includes(i)) {
                newArray.push(i);
            }
        }
        return newArray;
    }
    //
}
