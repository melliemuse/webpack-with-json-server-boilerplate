import htmlMaker from "./HTMLMaker.js"

const displayInformationOnDOM = (data) => {
    let buildHTML = ""
    const contentContainer = document.querySelector("#container")
     data.forEach( (singleData) => {
        console.log(htmlMaker(singleData))
        return buildHTML += htmlMaker(singleData)
    }
    )
    contentContainer.innerHTML = buildHTML
}

export default displayInformationOnDOM