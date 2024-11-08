{
    //
    function removeDuplicates (array:number[]) :number[] {
        const newArray: number[]= []
        for(let i of array) {
            if(!newArray.includes(i)){
                newArray.push(i)
            }
        }
        return newArray
    } 
    //
}