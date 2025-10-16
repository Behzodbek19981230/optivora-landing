export interface Project {
	id: number;
	industries_detail: Array<{
		id: number;
		name: string;

		slug: string;
		description: string;
		icon: string;
		order_index: number;
	}>;
	equipment_categories_detail: Array<{
		name: string;
		slug: string;
		description: string;
	}>;
	partners_detail: Array<{
		name: string;
		category: string;
		website: string;
		description: string;
	}>;
	country_detail: {
		id: number;
		code: string;
		name: string;
	};
	region_detail: {
		id: number;
		code: string;
		name: string;
	};
	district_detail: {
		id: number;
		code: string;
		name: string;
	};
	created_time: string;
	updated_time: string;
	title: string;

	slug: string;
	year: number;
	scope: string;

	summary: string;

	featured_image: string;
	is_featured: boolean;
	order_index: number;
	created_by: string | null;
	updated_by: string | null;
	country: number;
	region: number;
	district: number;
}
