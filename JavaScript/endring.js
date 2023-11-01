//Variable declarations
const btn = document.getElementById("btn");
const output = document.getElementById("tall1"); //Assigning the "tall1" id to the variable output visibility

//Function that listens for 'Enter' keyboard click
function enterKeyPressed() {
    document.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            checkFields();
        }
    });
}
enterKeyPressed();

//This function checks if the value of userInput1 or userInput2 is eqal to en empty string
//If so, display a error message, if not, execute the 'calculate()' function
function checkFields() {
    const [userInput1, userInput2] = [
        document.getElementById("userInput1").value,
        document.getElementById("userInput2").value,
    ];

    if (userInput1 == "" || userInput2 == "") {
        alert(
            "Vennligst fyll begge feltene før kalkulering!\nKun nummer akseptert"
        );
    } else {
        calculate(parseFloat(userInput1), parseFloat(userInput2));
        output.style.visibility = "visible"; //Making "tall1" visible when else statement is run
    }
}

//This function takes two input values from the user, 'userInput1' and 'userInput2', and calculates the persentage cange between the two values
// It first converts the string input values to numeric values using the parseFloat() function.
// It then calculates the percentage change by subtracting the opprinneligVerdi (original value) from the nyVerdi (new value),
// dividing the result by the opprinneligVerdi, and then multiplying the result by 100.
function calculate(nyVerdi, opprinneligVerdi) {
    // const nyVerdi = parseFloat(userInput1.value);
    // const opprinneligVerdi = parseFloat(userInput2.value);
    const prosentEndring =
        ((nyVerdi - opprinneligVerdi) / opprinneligVerdi) * 100;

    // Setting the textContent property of the output element
    //Using template literal and string interpolation to include dynamic values or expressions within a string
    output.textContent = `Prosentvis endring: ${prosentEndring.toFixed(2)}%`;
}

//Adding eventlistner that executes the function "checkFields()" when clicked
btn.addEventListener("click", () => {
    checkFields();
});
