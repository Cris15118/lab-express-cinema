const express = require('express');
const router = express.Router();
const Movies = require("../models/Movie.model")
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next)=>{
Movies.find()
.select({title: 1,image:1 })
.then((response)=>{
    console.log(response)
    res.render("movies.hbs",{
        allMovies: response
    })
})
.catch((error)=>{
    next(error)
})
})
router.get("/movies/:id",(req, res, next)=>{
    Movies.findById(req.params.id)
    .then((response)=>{
        console.log("mierda")
       
         res.render("see.more.hbs",{
            verMas: response
         })
    })
   .catch((error)=>{
    next(error)
   })
})

module.exports = router;
