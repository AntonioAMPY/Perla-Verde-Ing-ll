const createUser = (user_name, password, first_name, last_name) => {
    return {
        user_name,
        password,
        first_name,
        last_name,
        getFullName: function () {
            return `${this.first_name} ${this.last_name}`;
        }
    };
};