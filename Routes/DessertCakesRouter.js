import express from "express";
import {DessertCakes} from "../data/data.js";

const DessertCakesRouter = express.Router();


DessertCakesRouter.get("/", (req, res) => {
    res.render("pages/dish-details", {
        sideBar : "DessertCakes",
        title: "Easy recipes",
        allDishesItem : DessertCakes,
        mainContent: "DessertCakes",
        pageHeader : "Welcome to dessert Cackes"
    })
})


DessertCakesRouter.get("/:name", (req, res) => {

    let dessertCa = DessertCakes.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());
   
    res.render('pages/dish-details', 
        {dishesName: dessertCa,
        title : "DessertCakes",
       
        
        })
        
          

})

export default DessertCakesRouter