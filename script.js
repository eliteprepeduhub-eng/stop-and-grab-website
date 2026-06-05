function showWelcome() {

    alert("Thank you for visiting Stop & Grab Grill & Bites!");

}

function submitForm() {

    let userName =
        document.getElementById("name").value;

    if (userName === "") {

        alert("Please enter your name.");

    } else if (userName === "Ab") {

        alert("Welcome back, Ab!");

    } else {

        alert("Hello " + userName);

    }

}