
export interface Account {
    id: string;
    crmid: string;
    name: string;
    isGeoLocal: boolean;
    haveVoucher: boolean;
    cuit: string;
    status: string;
    tags?: Tag[];
    branches: Branch[];
    benefits: Benefit[];
    phone: string | null;
    email: string | null;
    web: string | null;
    highlighted: string;
    created_on: string;
    updated_on: string;
    ecommerce: boolean;
    images: Image[];
    relevance: number;
    description: string;
    virtualCard: boolean;
    socialNetworks: SocialNetworks;
  }
  
  export interface SocialNetworks {
    facebook: SocialNetwork | null;
    instagram: SocialNetwork | null;
    twitter: SocialNetwork | null;
  }
  
 export  interface SocialNetwork {
    name: string;
    type: string;
    prefix: string;
    url: string;
  }
  
  export interface Validity {
    date_from: string;
    date_to: string;
  }
  
  export interface Image {
    id: string;
    type: string ;
    url: string ;
    highlighted: boolean;
    thumb: boolean ;
  }
  
  export interface Tag {
    name: string;
    id_web: string;
    type_id: string;
    type: string;
  }
  
  export interface Branch {
    id: string;
    crmid: string;
    country: string;
    state: string;
    city: string;
    cuit: string;
    neighborhood: string;
    zip_code: string | null;
    region: string | null;
    address: string;
    number: string;
    observations: string | null;
    location: number;
    status: string;
    phone: string | null;
    latitude?: number; // Opcional
    longitude?: number; // Opcional
    virtualCard: boolean;
    created_on: string;
    updated_on: string;
  }
  
  export interface Benefit {
    ids: string[];
    id: string;
    program_name: string[];
    name: string;
    type: string;
    type_benefit: string;
    type_weight: number;
    category: string;
    subcategory: string;
    gender: string | null;
    exclusive: boolean;
    alliance: string | null;
    title: string;
    description: string;
    legal: string;
    images: Image[];
    value: string;
    weekdays: string[];
    status: string;
    auto_renew: string;
    validity: Validity;
    crm_ids: string[];
    created_on: string;
    updated_on: string;
    transactionTypes: string[];
    urlBenefit: string | null;
    haveVoucher: boolean;
  }