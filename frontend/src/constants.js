export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://rental-b51j.onrender.com';

export const PRODUCTS_URL = `${BASE_URL}/api/v1/products`;
export const UPLOAD_URL = `${BASE_URL}/api/v1/upload`;
export const USERS_URL = `${BASE_URL}/api/v1/users`;
export const ORDERS_URL = `${BASE_URL}/api/v1/orders`;
export const RAZORPAY_URL = `${BASE_URL}/api/v1/payment`;

