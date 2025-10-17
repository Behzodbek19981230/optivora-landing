export interface Partner {
	id: number;
	name: string;

	category: string;
	logo: string;
	website: string;
	description: string;

	order_index: number;
	created_time: string;
	updated_time: string;
	created_by: number;
	updated_by: number | null;
    country_detail?: {
        id: number;
        name: string;
        code: string;
    }
}
