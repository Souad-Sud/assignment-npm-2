import express from "express";
import {AllDishes } from "./data/data.js"
import DessertCookiesRouter from "./Routes/DessertCookiesRouter.js";
import DessertDrinksRouter from "./Routes/DessertDrinksRouter.js";
import DessertCakesRouter from "./Routes/DessertCakesRouter.js";
import * as dotenv from "dotenv";
import * as path from "path"
 

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>{
    res.render("pages/main-home.ejs", {
        title: "Easy recipes",
        allDishesItem : AllDishes,
        sideBar: "allDishes",
        mainContent: "allDishes",
        
       
     
    })
})

app.use("/DessertCakes", DessertCakesRouter)
app.use("/DessertCookies", DessertCookiesRouter)
app.use("/DessertDrinks", DessertDrinksRouter)

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))

