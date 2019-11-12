import data from "./Data.js"
import renderDOM from "./DOMManager.js"
const message = "Your Webpack application is set up and ready to go. Please start writing code."


data.getEmployeeData()
.then(employee => {
    console.log(employee)
    renderDOM(employee)
}
)

// document.querySelector("#container").innerHTML += `<h1>${renderDOM(employee)}</h1>`