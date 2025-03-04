import express from "express";
import {DessertDrinks} from "../data/data.js";

const DessertDrinksRouter = express.Router();


DessertDrinksRouter.get("/", (req, res) => {
    res.render("pages/dish-details", {
        sideBar : "DessertDrinks",
        title: "Easy recipes",
        allDishesItem: DessertDrinks,
         mainContent: "DessertDrinks",
         pageHeader : "Drinks are fresh and Easy to make"
    })
})


DessertDrinksRouter.get("/:name", (req, res) => {
    let dessertDri = DessertDrinks.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());
    res.render('pages/dish-details', 
        {dishesName: dessertDri,
        title : "DessertDrinks",
       
       
        
        })
    
})

export default DessertDrinksRouter