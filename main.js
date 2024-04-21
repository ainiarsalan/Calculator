import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "Enter first number",
        type: "input"
    },
    {
        name: "secondNumber",
        message: "Enter second number",
        type: "input"
    },
    {
        name: "operators",
        message: "Select one operator to perform operations",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// Conditional Statement
if (answer.operators === "Addition") {
    console.log(Number(answer.firstNumber) + Number(answer.secondNumber));
}
else if (answer.operators === "Subtraction") {
    console.log(Number(answer.firstNumber) - Number(answer.secondNumber));
}
else if (answer.operators === "Multiplication") {
    console.log(Number(answer.firstNumber) * Number(answer.secondNumber));
}
else if (answer.operators === "Division") {
    console.log(Number(answer.firstNumber) / Number(answer.secondNumber));
}
else {
    console.log("Please select a valid operator");
}
