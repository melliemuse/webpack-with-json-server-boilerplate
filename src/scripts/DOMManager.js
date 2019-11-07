import htmlMaker from "./HTMLMaker.js"

const displayInformationOnDOM = (employee, department, computer) => {
    console.log(employee, department, computer)
    .forEach( (singleInfo) => {
        console.log(singleInfo)
        return htmlMaker(singleInfo)
    })
}

export default displayInformationOnDOM