module.exports = {
  client: {
    service: {
      name: 'lotfsd',
      url: process.env.NODE_ENV === "production" ? "dunno" : "http://localhost:5000/graphql",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjlhOTE2YzA3LWQ1MTktNDBjYS05MzczLWUzMDA2NWVlY2EzOCIsIm5iZiI6MTU3OTM0ODE1MCwiZXhwIjoxNTc5OTUyOTUwLCJpYXQiOjE1NzkzNDgxNTB9.k-Kb_nSo8J4QUG5n4DRUjRe2iOY9C3Rox0PsQAnm3ig"
      }
    }
  }
}