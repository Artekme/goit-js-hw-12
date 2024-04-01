// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';


export async function getImages(userQuery, pageNumber) {

  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '?key=43036012-df3a1e6422cb462a655402953';
  const url = BASE_URL + API_KEY;

  const params = {
    q: userQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: pageNumber,
  };
  const headers = {};

  const response = await axios.get(url, { params, headers });
  return response.data;
  // renderGallery(response.data.hits);
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch images. Please try again later.');
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   loader.style.display = 'none';
    //   if (data.hits.length === 0) {
    //     iziToast.warning({
    //       title: 'Warning',
    //       message:
    //         'Sorry, there are no images matching your search query. Please try again!',
    //       position: 'topRight',
    //       maxWidth: 400,
    //     });
    //   } else {
    //     renderGallery(data.hits);
   
    //   }
    // })
    // .catch(error => {
    //   console.error('Error fetching images:', error);
    //   loader.style.display = 'none';
    //   iziToast.error({
    //     title: 'Error',
    //     message: 'Failed to fetch images. Please try again later.',
    //     position: 'topRight',
    //     maxWidth: 400,
    //   });
    // });
}
