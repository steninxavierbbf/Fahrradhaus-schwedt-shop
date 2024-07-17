interface Customer {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    username: string;
    billing: Billing;
    shipping: Shipping;
    is_paying_customer: boolean;
    avatar_url: string;
    meta_data: Metadatum[];
    orders_count: number;
    total_spent: string;
    _links: Links;
  }
  interface Links {
    self: Self[];
    collection: Self[];
  }
  interface Self {
    href: string;
  }
  interface Metadatum {
    id: number;
    key: string;
    value: string;
  }
  interface Shipping {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    postcode: string;
    country: string;
    state: string;
    phone: string;
  }
  interface Billing {
    first_name: string;
    last_name: string;
    company: string;
    address_1: string;
    address_2: string;
    city: string;
    postcode: string;
    country: string;
    state: string;
    email: string;
    phone: string;
  }