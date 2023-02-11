
// problem solving
// 2.Write a JavaScript function that takes a string and returns the longest word within the string. ===========,,,,,,===========.
// একটি জাভাস্ক্রিপ্ট ফাংশন লিখুন যা একটি স্ট্রিং নেয় এবং স্ট্রিংয়ের মধ্যে সবচেয়ে দীর্ঘতম শব্দটি ফেরত দেয়



function logestWorFun(str){
        var word = str.split(" ")
        var longestWord = "";
        for(var i = 0; i<word.length; i++){
            if(word[i].length>longestWord.length){
               longestWord=word[i]
            }
        }
        return longestWord

}
console .log(logestWorFun("abul hasan ridoikhan"))
