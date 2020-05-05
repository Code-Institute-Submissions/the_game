function sendMail(contactForm) {
    emailjs.send("robin_collins", "catboy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Catboy_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}