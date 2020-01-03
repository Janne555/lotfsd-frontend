const APIROOT = process.env.NODE_ENV === 'production' ? "dunno lol" : "https://localhost:5001/"

const ENDPOINTS = {
  LOGIN: { url: 'user/login', type: { token: "" } }
}

export {
  APIROOT,
  ENDPOINTS
}