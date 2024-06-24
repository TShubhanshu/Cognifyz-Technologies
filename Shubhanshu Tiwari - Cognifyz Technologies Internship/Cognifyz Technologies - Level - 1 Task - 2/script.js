document.addEventListener("DOMContentLoaded", function() {
    // Button color change on click
    const colorButton = document.getElementById("colorButton");
    colorButton.addEventListener("click", function() {
        this.classList.toggle("active");
    });

    // Alert box with greeting message
    const greetButton = document.getElementById("greetButton");
    greetButton.addEventListener("click", function() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning!";
        } else if (hours < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        alert(greeting);
    });

    // Basic calculator
    const calcButton = document.getElementById("calcButton");
    calcButton.addEventListener("click", function() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const sum = num1 + num2;
            document.getElementById("calcResult").textContent = "Result: " + sum;
        } else {
            document.getElementById("calcResult").textContent = "Result: Please enter valid numbers.";
        }
    });
});
