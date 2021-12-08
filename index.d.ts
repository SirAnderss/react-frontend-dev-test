type TProductId = number;
type TCategoryId = number;

type TCategory = {
  id: TCategoryId;
  name: string;
  icon?: string;
};

type TProduct = {
  id: TPProductId;
  name: string;
  qualification?: number;
  time?: string;
  price: number;
  image?: string;
};

type TCartItem = {
  id: TPProductId;
  name: string;
  qualification?: number;
  time?: string;
  price: number;
  image?: string;
  quantity?: number;
};

type TCart = {
  shoppingCart: TCartItem[];
  quantity: number;
  active: boolean;
};

type TAPIProdictDetaillResponse = TProduct;
type TAPICategoryDetaillResponse = TCategory;

type TAPIProdictListResponse = {
  length: number;
  data: TProduct[];
  error?: string;
};

type TAPICategoryListResponse = {
  length: number;
  data: TCategory[];
  error?: string;
};
