import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3030',
  // axios 요청 파라미터 옵션으로 기본값은 false로 설정되어 CORS 요청을 허용하지 않게 설정되어 있음.
  // true로 변경하면 CORS 요청을 허용하게되고 쿠키값으 전달할 수 있게 됨.
  withCredentials: true,
});

export default axiosInstance;
