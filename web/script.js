document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop normal form submission

        // Get user input
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        // Your email (recipient)
        let myEmail = "dhruvthakar644@gmail.com"; // Change to your email

        // Construct mailto link
        let subject = encodeURIComponent(`New Message from ${name}`);
        let body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        let mailtoLink = `mailto:${myEmail}?subject=${subject}&body=${body}`;

        // Try opening mail client
        let opened = window.open(mailtoLink, "_blank");

        // If mail client fails to open, open Gmail in the browser
        setTimeout(() => {
            if (!opened || opened.closed || typeof opened.closed === "undefined") {
                let gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;
                window.open(gmailLink, "_blank");
            }
        }, 500);
    });
});
