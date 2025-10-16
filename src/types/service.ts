export interface Service {
    id: number;
    industries: number[];
    equipment_categories: number[];
    created_time: string;
    updated_time: string;
    name: string;
  
    slug: string;
    short_description: string;
   
    description: string;
    
    icon: string;
    order_index: number;
    created_by: number;
    updated_by: number | null;
  }
     