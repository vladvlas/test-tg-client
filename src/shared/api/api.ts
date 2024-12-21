import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

export const $api = axios.create({
    // сюда указать url
    baseURL: "http://localhost:8080",
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
