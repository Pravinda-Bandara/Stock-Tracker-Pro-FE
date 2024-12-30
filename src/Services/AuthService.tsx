import apiClient from './AxiosInterceptor';
import { handleError } from '../Helpers/ErrorHandler';
import { UserProfileToken } from '../Models/User';

export const loginAPI = async (username: string, password: string) => {
    try {
        const data = await apiClient.post<UserProfileToken>('account/login', {
            username,
            password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const registerAPI = async (
    email: string,
    username: string,
    password: string
) => {
    try {
        const data = await apiClient.post<UserProfileToken>('account/register', {
            email,
            username,
            password,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};
