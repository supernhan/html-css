function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
    updatePrice(value);
}
  
function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
        updatePrice(value);
    }
}

function updatePrice(quantity) {
    var priceElement = document.getElementById('pricee');
    var price = 3730000; // Giá ban đầu
    var totalPrice = price * quantity;
    priceElement.innerText = formatNumber(totalPrice) + ' VNĐ';
}

// Hàm định dạng số
function formatNumber(amount) {
    return amount.toLocaleString('en-US');
}
