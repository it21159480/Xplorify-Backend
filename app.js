const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configs/db");
const multer = require('multer');
const Image = require('./models/image');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Parse JSON request bodies
app.use(express.json());

// Set up your routes
app.use('/', require('./routes/packageRoute'));
app.use('/', require('./routes/hotelRoute'));
app.use('/', require('./routes/blogRoute'));
app.use('/', require('./routes/restaurantRoute'));
app.use('/', require('./routes/driverRoute'));
app.use('/', require('./routes/vehicleRoute'));
app.use('/', upload.single('image'), require('./routes/imageRoute'));

app.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});