const APIROOT = process.env.NODE_ENV === 'production' ? "dunno lol" : "https://localhost:5001/"

const ENDPOINTS = {
  LOGIN: { url: 'user/login', type: {} as { Token: string, Characters: null } }
}

export {
  APIROOT,
  ENDPOINTS
}