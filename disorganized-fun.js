
const dictionary = require('./dictionary-long.js');

const A = "a".charCodeAt(0);
function getPositionInAlphabet(word){
    return word.charCodeAt(0) - A;
}

function createIndexForDictionary(d){
    let index = [0];
    let position = 0;
    for( let i = 1; i <= 26; i++){
        while ( position < d.length && getPositionInAlphabet(d[position]) < i )
            position++;
        index[i] = position;
    }
    return index;
}

function linearSearch(needle, haystack){
    for ( let i = 0; i < haystack.length; i++ ){
        if ( haystack[i] == needle ){
            return true;
        }
    }
    return false;
}


console.log(linearSearch("public", dictionary));
console.log(linearSearch("squanchy", dictionary));

function indexSearch(needle, haystack, index){
    let letterPosition = getPositionInAlphabet(needle);
    let start = index[letterPosition];
    let end = index[letterPosition + 1];
    for ( let i = start; i < end; i++ ){
        if ( haystack[i] == needle ){
            return true;
        }
    }
    return false;
}


let index = createIndexForDictionary(dictionary);
console.log(indexSearch("public", dictionary, index));
console.log(indexSearch("squanchy", dictionary, index));

function binarySearch(needle, haystack){
    let start = 0;
    let end = haystack.length;
    while ( start < end ){
        let pivot = Math.floor((start + end) / 2);
        let wordAtPivot = haystack[pivot];
        console.log(start, end, pivot, wordAtPivot);

        if ( wordAtPivot < needle ){
            start = pivot+1;
        } else if ( wordAtPivot > needle ){
            end = pivot;
        } else {
            return true;
        }
    }
    return false;
}

console.log(binarySearch("public", dictionary));
console.log(binarySearch("squalor", dictionary));
console.log(binarySearch("squander", dictionary));
console.log(binarySearch("squanchy", dictionary));