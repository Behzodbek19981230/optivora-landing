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

export const NewsService = async (page = 1, limit = 12) => {
	const response = await request.get(`/news?page=${page}&limit=${limit}`);
	return response.data;
};

export const getNewsById = async (id: string | number) => {
	const response = await request.get(`/news/${id}`);
	return response.data;
};

export const ProjectService = async (page = 1, limit = 12) => {
    const response = await request.get(`/projects?page=${page}&limit=${limit}`);
    return response.data;
}

export const getProjectById = async (id: string | number) => {
	const response = await request.get(`/projects/${id}`);
	return response.data;
};

export const showProjectBySlug =async(slug:string)=>{
    const response = await request.get(`/projects/show/${slug}`);
	return response.data;
}

export const CompanyProfileService = async () => {
	const response = await request.get('/company-profile/public');
	return response.data;
};
