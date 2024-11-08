{
    //
    function countWordOccurrences (sentence: string, word: string): number {
        const sentenceLowerCase = sentence.toLowerCase();
        const wordLowerCase = word.toLowerCase();
        const sentenceArray: string[] = sentenceLowerCase.split(' ')
        let numberOfWords : number = 0
        console.log(sentenceArray);
        for (let i of sentenceArray){
            if(i === wordLowerCase){
            numberOfWords = numberOfWords+ 1;
            }
        }
        return numberOfWords;
    }
    //
}