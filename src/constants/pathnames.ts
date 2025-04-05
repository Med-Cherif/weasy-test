const pathnames = {
  LOGIN: "/login",
  DASHBOARD: "/",
  PRODUCTS: "/products",
  PRODUCT_DETAILS: (id: string | number) => `/products/${id}`,
};

export default pathnames;
