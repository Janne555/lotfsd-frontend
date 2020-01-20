const APIROOT = process.env.NODE_ENV === 'production' ? "dunno lol" : "http://localhost:5000/"

const ENDPOINTS = {
  LOGIN: { url: 'user/login', type: "" }
}

export {
  APIROOT,
  ENDPOINTS
}