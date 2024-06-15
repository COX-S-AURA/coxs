<?php
// ফর্ম থেকে ডেটা গ্রহণ
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$country = $_POST['country'];
$subject = $_POST['subject'];

// ডেটা প্রসেসিং এবং স্টোর করা
// এখানে আপনি ডেটাবেসে ডেটা সেভ করতে পারেন অথবা ইমেইল পাঠাতে পারেন

// সাবমিট করা ডেটা প্রদর্শন
echo "প্রথম নাম: " . $firstname . "<br>";
echo "শেষ নাম: " . $lastname . "<br>";
echo "দেশ: " . $country . "<br>";
echo "বিষয়: " . $subject;
?>
