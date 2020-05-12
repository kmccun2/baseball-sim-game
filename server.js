const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express()

app.use(fileUpload())

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' })
  }

  const file = req.files.file

  file.mv(`${__dirname}/client/public/uploads/lineup.csv`, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    console.log(file.name)
    res.json({ fileName: file.name, filePath: `/uploads/lineup.csv` })
  })
})

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server Started...'))
