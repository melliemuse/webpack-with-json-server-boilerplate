const data = {
    getEmployeeData : () => {
        return fetch("http://localhost:8088/employees")
        .then(employee => employee.json())
    },
    getDepartmentData : () => {
        return fetch("http://localhost:8088/departments")
        .then(department => department.json())
    },
    getComputerData : () => {
        return fetch("http://localhost:8088/computers")
        .then(computer => computer.json())
    }
}

export default data