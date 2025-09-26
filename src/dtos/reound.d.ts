type RefoundAPIResponse = {
  id: string;
  userId: string;
  name: string;
  category: CategoriesAPIEnum;
  amount: number;
  filename: string;
  user: {
    name: string;
  };
};

type RefundsPaginationAPIResponse = {
  refunds: RefoundAPIResponse[];
  pagination: {
    page: number;
    perPage: number;
    totalRecords: number;
    totalPages: number;
  };
};
