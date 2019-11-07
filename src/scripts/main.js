import data from "./Data.js"
import renderDOM from "./DOMManager.js"
const message = "Your Webpack application is set up and ready to go. Please start writing code."

data.getEmployeeData()
.then(employee => {
    console.log(employee)}),
    data.getDepartmentData()
    .then(department => {
    console.log(department)}),
    data.getComputerData()
        .then(computer => {
            console.log(computer)
        })

// document.querySelector("#container").innerHTML += `<h1>${renderDOM(employee)}</h1>`