// TODO: Write code to define and export the Employee class


class Employee {

    _role = "Employee"; //common practice, source: https://javascript.info/private-protected-properties-methods

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {return this.name}
    getId() {return this.id}
    getEmail() {return this.email}
    getRole() {return this._role}

};

module.exports = Employee;