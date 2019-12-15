const APIROOT = process.env.NODE_ENV === 'production' ? "dunno lol" : "http://localhost:5000/api"

const ENDPOINTS = {
  LOGIN: 'user/login'
}

function getURL(endpoint: EndpointType, endpointOptions?: { [name: string]: any }) {
  return `${APIROOT}/${ENDPOINTS[endpoint]}`
}

export {
  getURL,
  ENDPOINTS
}