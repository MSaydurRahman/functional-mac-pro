function getCost(mainCost, product) {
    const extraCost = document.getElementById(product + '-cost');
    extraCost.innerText = mainCost;
    calculateTotal()
}

function getTotal(product) {
    const costAmountText = document.getElementById(product + '-cost');
    const amountCost = parseFloat(costAmountText.innerText);
    return amountCost;
}

function calculateTotal() {
    const memoryTotal = getTotal('extra-memory');
    const storageTotal = getTotal('extra-storage')
    const deliveryTotal = getTotal('extra-delivery')
    const total = memoryTotal + storageTotal + deliveryTotal + 1299;
    document.getElementById('total-price').innerText = total;
    document.getElementById('final-total').innerText = total;
}

//memory
document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    getCost(0, 'extra-memory')
})
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    getCost(180, 'extra-memory')
})

//storage
document.getElementById('256gb-ssd').addEventListener('click', function () {
    getCost(0, 'extra-storage')
})
document.getElementById('512gb-ssd').addEventListener('click', function () {
    getCost(100, 'extra-storage')
})
document.getElementById('1tb-ssd').addEventListener('click', function () {
    getCost(180, 'extra-storage')
})

//hoose your delivery option
document.getElementById('free-delivery').addEventListener('click', function () {
    getCost(0, 'extra-delivery')
})
document.getElementById('charged-delivery').addEventListener('click', function () {
    getCost(20, 'extra-delivery')
})

// final total
document.getElementById('promo-button').addEventListener('click', function () {
    const promoField = document.getElementById('promo-input');
    const promoInput = promoField.value;
    const finalInput = document.getElementById('total-price');
    const finalTotal = finalInput.innerText
    const finalTotalAmount = finalTotal - (finalTotal * 0.2)

    if (promoInput == 'stevekaku') {
        document.getElementById('final-total').innerText = finalTotalAmount;
    }
    promoField.value = '';
})
