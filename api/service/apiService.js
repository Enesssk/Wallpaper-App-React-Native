import apiClient from '../Client';
import { getImagesEndpoint } from '../Endpoint';
import { API_KEY } from '../../constants/apiConstants';


export const getInitialImages = async () => {
  const response = await apiClient.get(getImagesEndpoint, {
    params: {
      key: API_KEY,
      image_type: "photo",
      order: "popular",
      per_page: "25"
    },
  })
  return response.data.hits
}

export const searchImages = async (query) => {
  const response = await apiClient.get(getImagesEndpoint, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      per_page: "25",
    }
  })
  //console.log("search", response.data.hits)
  return response.data.hits
}

export const chooseCategory = async (categoryName) => {
  const response = await apiClient.get(getImagesEndpoint, {
    params: {
      key: API_KEY,
      image_type: "photo",
      per_page: "25",
      category: categoryName,
    }
  })
  //console.log("category",response.data.hits)
  return response.data.hits
}

export const getOrderFilters = async (filters) => {
  const response = await apiClient.get(getImagesEndpoint, {
    params: {
      key: API_KEY,
      image_type: "photo",
      per_page: "25",
      order: filters.order,
      orientation: filters.orientation,
      colors: filters.colors,
    }
  })
  return response.data.hits
}