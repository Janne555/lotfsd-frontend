const APIROOT = process.env.NODE_ENV === 'production' ? "https://lotfsdapi.azurewebsites.net/" : "http://172.17.0.2:5000/"

const ENDPOINTS = {
  LOGIN: { url: 'user/login', type: "" },
  REGISTER: { url: 'user/register', type: "" }
}

export {
  APIROOT,
  ENDPOINTS
}