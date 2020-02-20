module.exports = {
  client: {
    service: {
      name: 'lotfsd',
      url: `${process.env.BACKEND_URL}graphql`,
      headers: {
        Authorization: `Bearer ${process.env.SCHEMA_TOKEN}`
      }
    }
  }
}