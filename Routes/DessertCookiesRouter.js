import express from "express";
import {DessertCookies} from "../data/data.js";

const DessertCookiesRouter = express.Router();


DessertCookiesRouter.get("/", (req, res) => {
    res.render("pages/dish-details", {
        sideBar : "DessertCookies",
        title: "Easy recipes",
        allDishesItem: DessertCookies,
        mainContent: "DessertCookies",
        pageHeader : "Dessert Cookies are just amazing"
    })
})


DessertCookiesRouter.get("/:name", (req, res) => {
    let dessertCo = DessertCookies.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());
    res.render('pages/dish-details', 
        {dishesName: dessertCo,
        title : "DessertCookies",
        
      
        })
   

})

export default DessertCookiesRouter