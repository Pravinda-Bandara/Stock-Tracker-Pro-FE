import apiClient from './AxiosInterceptor';
import { CommentGet, CommentPost } from '../Models/Comment';
import { handleError } from '../Helpers/ErrorHandler';

export const commentPostAPI = async (
    title: string,
    content: string,
    symbol: string
) => {
    try {
        const data = await apiClient.post<CommentPost>(`comment/${symbol}`, {
            title,
            content,
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const commentGetAPI = async (symbol: string) => {
    try {
        const data = await apiClient.get<CommentGet[]>(`comment?Symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);
    }
};
