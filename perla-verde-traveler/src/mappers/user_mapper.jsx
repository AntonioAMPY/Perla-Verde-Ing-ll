// Mapper para transformar los datos crudos (JSON) al modelo User
import { User } from './userModel';

export const userMapper = (data) => {
    return data.map(item => new User(item.user_name, item.password, item.first_name, item.last_name));
};
