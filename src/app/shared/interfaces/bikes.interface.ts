export interface Bike {
    id: number;
    name: string;
    slug: string;
    permalink: string;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    type: string;
    status: string;
    featured: boolean;
    catalog_visibility: string;
    description: string;
    short_description: string;
    sku: string;
    price: string;
    regular_price: string;
    sale_price: string;
    date_on_sale_from?: any;
    date_on_sale_from_gmt?: any;
    date_on_sale_to?: any;
    date_on_sale_to_gmt?: any;
    on_sale: boolean;
    purchasable: boolean;
    total_sales: number;
    virtual: boolean;
    downloadable: boolean;
    downloads: any[];
    download_limit: number;
    download_expiry: number;
    external_url: string;
    button_text: string;
    tax_status: string;
    tax_class: string;
    manage_stock: boolean;
    stock_quantity: number;
    backorders: string;
    backorders_allowed: boolean;
    backordered: boolean;
    low_stock_amount?: any;
    sold_individually: boolean;
    weight: string;
    dimensions: Dimensions;
    shipping_required: boolean;
    shipping_taxable: boolean;
    shipping_class: string;
    shipping_class_id: number;
    reviews_allowed: boolean;
    average_rating: string;
    rating_count: number;
    upsell_ids: any[];
    cross_sell_ids: any[];
    parent_id: number;
    purchase_note: string;
    categories: Category[];
    tags: Category[];
    images: Image[];
    attributes: any[];
    default_attributes: any[];
    variations: any[];
    grouped_products: any[];
    menu_order: number;
    price_html: string;
    related_ids: number[];
    meta_data: Metadatum[];
    stock_status: string;
    has_options: boolean;
    post_password: string;
    jetpack_sharing_enabled: boolean;
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
  interface Image {
    id: number;
    date_created: string;
    date_created_gmt: string;
    date_modified: string;
    date_modified_gmt: string;
    src: string;
    name: string;
    alt: string;
  }
  interface Category {
    id: number;
    name: string;
    slug: string;
  }
  interface Dimensions {
    length: string;
    width: string;
    height: string;
  }