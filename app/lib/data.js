import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        await connectToDB();
        const users = await User.find({});
        return users;
    }catch(err) {
        throw err;
    }
}


export const fetchUserById = async (id) => {
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw new Error(error)
    }
}