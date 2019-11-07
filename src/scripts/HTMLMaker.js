const htmlMaker = (employee, department, computer) => {
    console.log(employee.name)
    console.log(department.name)
    console.log(computer.name)
    return `<article class="employee">
        <header class="employee__name">
            <h1>${employee.name}</h1>
        </header>
        <section class="employee__department">
            Works in the ${department.name} department
        </section>
        <section class="employee__computer">
            Currently using a ${computer.name}
        </section>
    </article>`
}

export default htmlMaker