type TProductId = number;
type TCategoryId = number;

type TCategory = {
  id: TPCategoryId;
  name: string;
  icon: string;
};

type TProduct = {
  id: TPProductId;
  name: string;
  qualification: number;
  time: string;
  price: number;
  image: string;
};

type TAPIProdictDetailResponse = TProduct;
type TAPICategoryDetailResponse = TCategory;

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
