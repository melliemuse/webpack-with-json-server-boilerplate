const htmlMaker = (data) => {
    console.log(data.name)
    console.log(data.department.name)
    console.log(data.computer.model)
    return `<article class="employee">
        <header class="employee__name">
            <h1>${data.name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${data.department.name} department
        </section>
        <section class="employee__computer">
            Currently using a ${data.computer.model}
        </section>
    </article>`
}

export default htmlMaker