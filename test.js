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