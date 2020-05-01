import axios from 'axios';
let API_URL = 'http://pizzaapp.test/api/';

class ProductService {
  getProducts = () => {
    return axios.get(API_URL + 'products', {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  };
}
export default new ProductService();
