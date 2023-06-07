const personalInfoForm = document.getElementById("personal-info-form");

function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    let church = document.getElementById("church").value;
    let baptized = document.querySelector('input[name="baptized"]:checked').value;
    let member = document.querySelector('input[name="member"]:checked').value;

// Perform validation here
    if (name.trim() === "" || phone.trim() === "" || address.trim() === "" || age.trim() === "" || church.trim() === "") {
        alert("Please fill out all fields.");
        return false;
    } else {
        alert("Thank you for submitting your information!");
        return true;
    }
}

personalInfoForm.addEventListener("submit", submitForm);
