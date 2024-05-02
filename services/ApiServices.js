import axios from 'axios';

const BASE_URL = 'https://your-api-url.com';

const ApiService = {
  // Function to upload a photo
  uploadPhoto: async (photoData) => {
    try {
      const response = await axios.post(`${BASE_URL}/photos`, photoData);
      return response.data; // Return the uploaded photo data
    } catch (error) {
      throw new Error('Failed to upload photo. Please try again later.');
    }
  },

  // Function to fetch all photos
  fetchPhotos: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/photos`);
      return response.data; // Return the list of photos
    } catch (error) {
      throw new Error('Failed to fetch photos. Please try again later.');
    }
  },

  // Function to fetch details of a specific photo by ID
  fetchPhotoById: async (photoId) => {
    try {
      const response = await axios.get(`${BASE_URL}/photos/${photoId}`);
      return response.data; // Return the photo details
    } catch (error) {
      throw new Error('Failed to fetch photo details. Please try again later.');
    }
  },
};

export default ApiService;
