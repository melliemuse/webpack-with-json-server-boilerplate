const data = {
    getEmployeeData : () => {
        return fetch("http://localhost:8088/employees?_expand=department&_expand=computer")
        .then(employee => employee.json())
    }
}

export default data