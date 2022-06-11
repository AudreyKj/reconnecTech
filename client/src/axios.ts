import axios from "axios";

const instance = axios.create({xsrfCookieName: "my-token", xsrfHeaderName: "csrf-token"});

export default instance;