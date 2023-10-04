import axios from "axios";
import { BASE_URL } from "../models/constants";

export const apiClient = axios.create({
    baseURL: BASE_URL,
});

let ACCESS_TOKEN: string;
let REFRESH_TOKEN: string;

interface AxiosConfigProps {
    accessToken?: string | undefined | null;
    refreshToken?: string | undefined | null;
}

export function configureAxios({
                                   accessToken,
                                   refreshToken,
                               }: AxiosConfigProps) {
    ACCESS_TOKEN = accessToken || localStorage.getItem("token") || "";
    REFRESH_TOKEN = refreshToken || "";
    apiClient.interceptors.request.use(
        (req) => {
            if (ACCESS_TOKEN) {
                req.headers.authorization = `Bearer ${ACCESS_TOKEN}`;
            }
            return req;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    apiClient.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error.response) {
                console.error(
                    error.response.data.description ||
                    "An error occured, please try again"
                );
            } else if (error.request) {
                console.error("Network error, please try again");
            } else {
                console.error("An error occured, please try again");
            }
            return Promise.reject(error);
        }
    );
}