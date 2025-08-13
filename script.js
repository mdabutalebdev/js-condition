// // একটি ভেরিয়েবল age আছে।
// // যদি বয়স 18 বা তার বেশি হয়, আউটপুট দেখাবে "আপনি ভোট দিতে পারবেন"
// // না হলে আউটপুট দেখাবে "আপনি ভোট দিতে পারবেন না"

// let boys = 10;
// const votDewarBoys = 18;

// if (boys >= votDewarBoys) {
//   console.log("apni vot dite parben");
// } else {
//   console.log("apni akhono soto age boro hon 18 hoile vot diyen");
// }

// পাস বা ফেল
// একটি ভেরিয়েবল marks আছে।
// যদি নম্বর 40 বা তার বেশি হয়, আউটপুট "আপনি পাস করেছেন"
// না হলে "আপনি ফেল করেছেন"

// let marks = 10;
// const passMark = 40;

// if (marks >= passMark) {
//   console.log("Obinondhon apni pass koresen. Misty niye aisen");
// }else{
//     console.log("apni fail. adda bad diye kaj koren");

// }

// জোড় বা বিজোড় সংখ্যা
// একটি ভেরিয়েবল number আছে।
// যদি সংখ্যাটি জোড় হয়, আউটপুট "সংখ্যাটি জোড়"
// না হলে "সংখ্যাটি বিজোড়"

// let number = 10;

// if (number % 2 == 0) {
//   console.log("songkhati Even");
// } else {
//   console.log("songkhati Bijor");
// }

// তাপমাত্রা পরীক্ষা
// একটি ভেরিয়েবল temp আছে।
// যদি তাপমাত্রা 30-এর বেশি হয়, আউটপুট "আজ গরম"
// না হলে "আজ ঠান্ডা"

// let NowTemp = 20;
// const temp = 30;

// if (NowTemp > temp) {
//   console.log("oh my god.ajke ato hot keno");
// } else {
//   console.log("oh no sei thanda");
// }

// পজিটিভ / নেগেটিভ / শূন্য
// একটি ভেরিয়েবল num আছে।
// যদি শূন্যের বেশি হয়, "পজিটিভ"
// যদি শূন্যের কম হয়, "নেগেটিভ"
// যদি শূন্য হয়, "শূন্য"

// let num = 0;

// if (num > 0) {
//   console.log("positive");
// }else if(num<0){
//    console.log("Negitive");

// }else if (num==0) {
//     console.log("ZERO");

// }

// টিকিটের দাম নির্ধারণ
// একটি ভেরিয়েবল age আছে।
// বয়স < 5 হলে "Free"
// বয়স 5–17 হলে "50 টাকা"
// বয়স 18–59 হলে "100 টাকা"
// বয়স ≥ 60 হলে "70 টাকা"

// let myAge = -1;

// if (myAge < 5) {
//   console.log("Free");
// } else if (myAge >= 5 && myAge <= 17) {
//   console.log("50 tk");
// } else if (myAge >= 18 && myAge <= 59) {
//   console.log("100 tk");
// } else if (myAge >= 60) {
//   console.log("70 tk");
// }else{
//     console.log("gura lagbe na bari jao");

// }

// বড় সংখ্যা বের করা
// দুটি ভেরিয়েবল a ও b আছে।
// কোন সংখ্যা বড় সেটা আউটপুট দেখাও।
// যদি সমান হয় "দুটি সংখ্যা সমান" লিখো।

let a = 80;
let b = 120;

if (a > b) {
  console.log("a = " + a);
} else if (b > a) {
  console.log("b = " + b);
} else {
  console.log("2 ta songkhai soman ");
}
