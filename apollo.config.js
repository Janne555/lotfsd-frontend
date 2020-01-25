module.exports = {
  client: {
    service: {
      name: 'lotfsd',
      url: process.env.NODE_ENV === "production" ? "dunno" : "http://localhost:5000/graphql",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjFmYjM2ZGFiLWEzYzEtNDcwNi04Y2FmLTU3NDZhMjVmMWUwMCIsIm5iZiI6MTU3OTk2NzUzMCwiZXhwIjoxNTgwNTcyMzMwLCJpYXQiOjE1Nzk5Njc1MzB9.HyxU4e6yMvc4UQRFk7Upwp-dk4J1dVJQr8eSceE-l1g"
      }
    }
  }
}