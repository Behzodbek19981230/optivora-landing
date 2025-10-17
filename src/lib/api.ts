

import axios, { AxiosHeaders } from 'axios';

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL


export const request = axios.create({
	baseURL: baseApiUrl,
});
request.interceptors.request.use(
	(config) => {
		const language = localStorage.getItem('optivora-language') || 'ru';

		if (!config.headers) config.headers = new AxiosHeaders();
		const headers = config.headers as AxiosHeaders;

		headers['Accept-Language'] = language;
		headers['Content-Type'] = 'application/json';

		return config;
	},
	(error) => Promise.reject(error)
);
request.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error);
	}
);

export const IndustryService = async () => {
	const response = await request.get('/industry/public');
	return response.data;
}

export const ProjectService = async () => {
    const response = await request.get(`/project/public`);
    return response.data;
}
export const ProjectDetailService = async (id: string) => {
    const response = await request.get(`/project/${id}/public`);
    return response.data;
}
export const ProjectImagesService = async (id: string) => {
    const response = await request.get(`/project-image/public?project=${id}`);
    return response.data;
}



export const CompanyProfileService = async () => {
	const response = await request.get('/company-profile/public');
	return response.data;
};

export const ServiceOursService = async () => {
    const response = await request.get('/service/public');
    return response.data;
}

export const PartnerService = async () => {
    const response = await request.get('/partner/public');
    return response.data;
}
