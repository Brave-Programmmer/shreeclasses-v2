document.getElementById("enquiry-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // EmailJS setup
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS User ID

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        email: email,
        message: message
    }).then(
        () => alert('Your enquiry has been sent successfully!'),
        (err) => alert('Failed to send enquiry. Please try again.')
    );

    // Clear form
    document.getElementById("enquiry-form").reset();
});
