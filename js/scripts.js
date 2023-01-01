
function findLongestWord (word){
    let result = '';
    if (typeof word === 'string'){
        const arrayOfWords = word.split(' ')
        for (let i = 0; i < arrayOfWords.length; i++){
            if (arrayOfWords[i].length > result.length){
                result = arrayOfWords[i];
            }
        }
    } else {
        result = 'it is not a string';
    }
    return result
}

console.log(findLongestWord( 'london is the capital of great britain its political economic and cultural centre'));