<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>আপনার প্রোডাক্ট পেজের শিরোনাম</title>
<!-- অন্যান্য হেড এলিমেন্টস -->
</head>
<body>

<!-- আপনার HTML কন্টেন্ট -->
<button id="addToCartButton">Add to Cart</button>

<!-- আপনার স্ক্রিপ্ট ট্যাগ -->
<script>
// আপনার JavaScript কোড
document.addEventListener('DOMContentLoaded', function() {
fetch('product.json')
.then(response => response.json())
.then(product => {
document.getElementById('addToCartButton').addEventListener('click', function() {
addToCart(product);
});
});
});

function addToCart(product) {
console.log('Adding to cart:', product.productName);
// কার্টে প্রোডাক্ট যোগ করার লজিক
}
</script>

</body>
</html>
