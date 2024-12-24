// server.js
const express = require('express');
const multer = require('multer');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

const upload = multer({ dest: 'uploads/' }); // Set up file upload destination

app.post('/upload', upload.single('movie'), (req, res) => {
    // Handle the uploaded movie file
    console.log(`Uploaded file: ${req.file.originalname}`);
    res.send('File uploaded successfully!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});