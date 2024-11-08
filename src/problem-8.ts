{
    //
    function validateKeys<T>(obj: T, keys: (keyof T)[]) : boolean{
        return keys.every(keys => obj[keys])
    }
    //
}