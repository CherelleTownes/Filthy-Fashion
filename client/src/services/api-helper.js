import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://filthyfashion-api.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ========================================
// ================ categories ============
// ========================================

export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const getOneCategory = async (id) => {
  const resp = await api.get(`/categories/${id}`);
  return resp.data;
}

// ========================================
// ========== clothing variations =========
// ========================================

export const getAllClothingVariations = async () => {
  const resp = await api.get('/clothing_variations');
  return resp.data;
}

export const getOneClothingVariation = async (id) => {
  const resp = await api.get(`/clothing_variations/${id}`);
  return resp.data;
}

export const postClothingVariation = async (clothingVariationData) => {
  const resp = await api.post('/clothing_variations', clothingVariationData);
  return resp.data;
}

export const putClothingVariation = async (id, clothingVariationData) => {
  const resp = await api.put(`/clothing_variations/${id}`, clothingVariationData);
  return resp.data;
}

export const destroyClothingVariation = async (id) => {
  const resp = await api.delete(`/clothing_variations/${id}`);
  return resp;
}

// =========================================================
// ========= categories and clothing variations ============
// =========================================================

// export const addClothingVariations = async (flavorId, foodId) => {
//   const resp = await api.get(`/flavors/${flavorId}/foods/${foodId}`)
//   return resp.data;
// }
