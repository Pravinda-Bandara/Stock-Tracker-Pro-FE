import apiClient from './AxiosInterceptor';
import { PortfolioGet, PortfolioPost } from '../Models/Portfolio';
import { handleError } from '../Helpers/ErrorHandler';

export const portfolioAddAPI = async (symbol: string) => {
    try {
        const data = await apiClient.post<PortfolioPost>(`portfolio?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const portfolioDeleteAPI = async (symbol: string) => {
    try {
        const data = await apiClient.delete<PortfolioPost>(`portfolio?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const portfolioGetAPI = async () => {
    try {
        const data = await apiClient.get<PortfolioGet[]>('portfolio');
        return data;
    } catch (error) {
        handleError(error);
    }
};
