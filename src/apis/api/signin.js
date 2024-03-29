import instance from "../utils/instance";

export const signinRequest = async (data) => {
    try {
        const response = instance.post("/auth/signin", data);
        return response;
    } catch (error) {
        console.log(error);
        return error.response;
    }
};
