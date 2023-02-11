// provlem
// 5.Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.  ====================
// পুনরাবৃত্তি ব্যবহার করে দুটি ধনাত্মক সংখ্যার সর্বশ্রেষ্ঠ সাধারণ ভাজক (GCD) খুঁজে পেতে একটি জাভাস্ক্রিপ্ট প্রোগ্রাম লিখুন।


function GCD(nauber1,nauber2){
    if(nauber1==nauber2){
        return nauber1;
    }
    if(nauber1%nauber2==0){
        return nauber2
    }if(nauber2%nauber1==0){
        return nauber1
    }
    if(nauber1>nauber2){
        return (GCD(nauber1%nauber2,nauber2));
    }else{
        return(GCD(nauber2%nauber1,nauber1))
    }
}
console.log(GCD(4,6))

