// Problem Solving
// 1.Write a JavaScript function that takes a string and returns the number of vowels in this string.========0=======0=========,

function vowelsFunc(str1){
    var vowels = "AaEeIiOoUu";
    var countVowels = 0;
        for( var i = 0; i<str1.length; i++){
            if(vowels.indexOf(str1[i]) !== -1){
                countVowels++
                
            }

   
        }
        return countVowels
}
console.log(vowelsFunc("Abul rakib dhaka hasan"))