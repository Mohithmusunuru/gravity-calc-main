function askUser() {
    document.getElementById("inputSection").style.display = "block";
}

function sadMessage() {
    document.getElementById("message").innerHTML = "You made me sad :( <br> Bye!";
}

function calculateForce() {
    let mass = document.getElementById("mass").value;
    if (mass > 0) {
        let force = mass * 9.80665;
        document.getElementById("result").innerHTML = "Force of attraction: " + force.toFixed(2) + " N";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid mass.";
    }
}
