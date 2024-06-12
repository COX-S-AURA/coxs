// JavaScript কোড
document.addEventListener('DOMContentLoaded', (event) => {
document.getElementById('myForm').addEventListener('submit', function (e) {
e.preventDefault(); // ফর্ম সাবমিট হওয়া বন্ধ করে দেয়

// ইনপুট ফিল্ডের ভ্যালু পাওয়া
var name = document.getElementById('name').value;

// ভ্যালিডেশন চেক
if(name.length < 3) {
alert('নাম অন্তত ৩ অক্ষর হতে হবে।');
return false;
}

// সাবমিট সফল হলে মেসেজ দেখানো
alert('ফর্ম সাবমিট সফল হয়েছে, ধন্যবাদ ' + name);
return true;
});
});