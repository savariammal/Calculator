let outputscreen = document.getElementById("output");
let equalsButton = document.getElementById("equals");

function display(num) {
    // Only allow numbers, operators, and decimal point
    const validInputs = "0123456789+-*/.%";
    if (validInputs.includes(num)) {
        if (outputscreen.value === "undefined") {
            outputscreen.value = "";
        }
        outputscreen.value += num;
        // Enable the equals button if it was disabled
        equalsButton.disabled = false;
    }
}

function Calculate() {
    try {
        // If outputscreen is empty, set it to "0"
        if (outputscreen.value === "") {
            outputscreen.value = "0";
        } else {
            // Remove the last character if it is an operator
            const lastChar = outputscreen.value.slice(-1);
            const operators = "+-*/.%";
            if (operators.includes(lastChar)) {
                outputscreen.value = outputscreen.value.slice(0, -1);
            }
            outputscreen.value = eval(outputscreen.value);
        }
        // Disable the equals button after calculation
        equalsButton.disabled = true;
    } catch (err) {
        alert("Enter valid inputs");
        Clear();
    }
}

function Clear() {
    outputscreen.value = "";
    equalsButton.disabled = false;
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
    // Enable the equals button if it was disabled
    equalsButton.disabled = false;
}
