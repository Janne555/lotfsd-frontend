const APIROOT = process.env.NODE_ENV === 'production' ? "https://lotfsdapi.azurewebsites.net/" : "http://localhost:5000/"

const ENDPOINTS = {
  LOGIN: { url: 'user/login', type: "" }
}

export {
  APIROOT,
  ENDPOINTS
}