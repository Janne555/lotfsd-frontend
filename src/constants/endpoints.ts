const APIROOT = process.env.NODE_ENV === 'production' ? "dunno lol" : "http://localhost:5000/api"

const ENDPOINTS = {
  LOGIN: { url: 'user/login', type: { token: "" } },
  ASD: { url: 'user/ASD', type: {} as CharacterSheet }
}

export {
  APIROOT,
  ENDPOINTS
}