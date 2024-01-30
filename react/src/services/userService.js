import axios from "axios";

const userService = {
    endPoint: "https://api.remotebootcamp.dev/api/users/"
}

userService.login = (payload) => {
    console.log("userLogin is executing", payload);

    const config = {
        method: "POST",
        url: userService.endPoint + "login",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
};

userService.register = (payload) => {
    console.log("user register is executing", payload);

    const config = {
        method: "POST",
        url: userService.endPoint + "register",
        data: payload,
        withCredentials: true,
        crossdomain: true,
        header: { "Content-Type": "application/json" },
    };
    return axios(config);
};

export default userService;