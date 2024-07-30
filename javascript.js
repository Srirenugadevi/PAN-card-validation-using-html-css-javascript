function validatePAN() {
    var pan = document.getElementById("panNumber").value;

    var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panPattern.test(pan)) {
        alert("Invalid PAN number");
        return false; 
    }
    alert("Submitted sucessfully");
    return true;
}