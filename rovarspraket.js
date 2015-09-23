/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if ( a > b ) 
    	return a
   else if (b > a) {
   		return b
   };
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    var max = Math.max(a, b, c);
    return max
}

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));


// PART 1.5

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function maxOfArray(array){
    var max = 0;
    var a = array.length;
    var counter = 0;
    for (counter = 0; counter < a; counter++) {
        if (array[counter] > max) {
            max = array[counter];
        }
    }
    return max;
}   

console.assert(maxOfArray([2,4,3]) === 4);
console.assert(maxOfArray([10,9,8,100,7,6]) === 100);

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol){
    symbol = symbol.toLowerCase()
    if(symbol.length === 1){
        return /[aeiou]/.test(symbol);
    }
}

console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(language){
   
   if(typeof language !== 'string'){
        language = language.toString()
        return language;
   }

console.log(typeof language.toString())

    var resultString = "";
    for (var i = 0; i < language.length; i++) {
        var letter = language[i]
        var consonant = 'qwrtpsdfghjklzxcvbnm'
        if (consonant.indexOf(letter) >= 0) { //if the letter is in my consonant sequence (if it is a vowel)
            resultString += letter+'o'+letter

        }
        else { //double the constanant and add "o" in between every constanant
            resultString += letter;
        }
    }
    console.log('the result array is ' + resultString)
    return resultString;
   } 




// console.log(rovarspraket("cat b"));


// console.log('------------'+rovarspraket(0));
console.assert(rovarspraket(0) === "0");
console.assert(rovarspraket("a") === "a");
console.assert(rovarspraket("b") === "bob");
console.assert(rovarspraket("cat b") === "cocatot bob");
console.assert(rovarspraket("cat") === "cocatot");
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot");

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    return str.split('').reverse().join('');
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    var array = sentence.match(/\w{0,}/gi);
    var result = array[0];

    for (var i = 1; i < array.length; i++) {
        if(result.length < array[i].length){
            result = array[i];
        }

    }
    return result;
}
console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

