function generateEmployeeData() {

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    return {
        firstName: 'Test',
        middleName: 'Auto',
        lastName: `Employee${randomNumber}`,
        employeeId: `EMP${randomNumber}`
    };
}

module.exports = {
    generateEmployeeData
};