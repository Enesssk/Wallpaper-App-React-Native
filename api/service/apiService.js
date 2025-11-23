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
  console.log("response.data", response.data.hits)
  return response.data.hits
}