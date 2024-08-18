const express = require('express')
const mongoose = require('mongoose')
const urlRoute = require('./routes/routes')
const path = require('path')
const URL = require('./models/models')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const cookieParser = require('cookie-parser')

const {restrictToLoggedInUserOnly, checkAuth} = require('./middlewares/auth')

app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/url', restrictToLoggedInUserOnly, urlRoute)
app.use('/', checkAuth, staticRoute)
app.use('/user', userRoute)
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))


app.get("/:shortID", async (req, res) => {
  const shortID = req.params.shortID;  // Make sure this matches the schema field
  
  try {
      const entry = await URL.findOneAndUpdate(
          { shortID },  // Correct field name
          {
              $push: {
                  visitHistory: {
                      timestamp: Date.now(),
                  },
              },
          },
          { new: true }  // Return the updated document
      );

      if (entry) {
          res.redirect(entry.redirectURL);  // Redirect to the original URL
      } else {
          res.status(404).send('URL not found');  // Handle case where no URL is found
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


app.listen(8001, ()=> console.log("Server running"))

mongoose.connect('mongodb://localhost:27017/urlDB')
.then(()=>console.log('MongoDB connected'))
.catch((error)=>console.log(error))