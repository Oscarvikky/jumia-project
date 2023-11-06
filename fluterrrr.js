document.getElementById('pay-button').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    FlutterwaveCheckout({
        public_key: 'YOUR_PUBLIC_KEY',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'USD',
        payment_type: 'card',
        customer: {
            email: email,
        },
        callback: function (response) {
            console.log(response);
            if (response.status === 'successful') {
                // Payment was successful, you can redirect to a success page.
                window.location.href = 'success.html';
            } else {
                // Payment failed or was canceled.
                window.location.href = 'error.html';
            }
        },
    });
});
