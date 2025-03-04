function Dish (name, description, image, type, preparTime, CookTime, totalTime,  Ingredients, Instructions) {
    this.name = name;
    this.description = description
    this.image = image
    this.type = type
    this.preparTime = preparTime
    this.CookTime = CookTime
    this.Ingredients = Ingredients
    this.Instructions = Instructions
    this.totalTime = totalTime
}

let DessertCakes = [
    new Dish("Brownies", 
           "A brownie is a type of baked dessert that is typically made from chocolate, flour, sugar, eggs, and butter. Brownies are known for their rich, fudgy texture and can vary in consistency from cakey to chewy",
            "../images/browni.jpg",
            "DessertCakes",
           "5",
           "45",
           "50",
           "1 1/2 cups granulated sugar 3/4 cup all-purpose flour 2/3 cup cocoa powder, sifted if lumpy	1/2 cup powdered sugar, sifted if lumpy	1/2 cup dark chocolate chips 3/4 teaspoons sea salt 2 large eggs 1/2 cup canola oil or extra-virgin olive oil 2 tablespoons water 1/2 teaspoon vanilla",
        "1.Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper. 2.In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.3.	In a large bowl, whisk together the eggs, olive oil, water, and vanilla.4.Sprinkle the dry mix over the wet mix and stir until just combined.5.	Pour the batter into the prepared pan (it'll be thick - that's ok) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: it's better to pull the brownies out early than to leave them in too long). Cool completely before slicing.*** Store in an airtight container at room temperature for up to 3 days. These also freeze well!"),

    new Dish("Chocolate-Bundt-Cake",
           "A Bundt cake is a cake that is baked in a Bundt pan, shaping it into a distinctive donut shape. The shape is inspired by a traditional European cake known as Gugelhupf, but Bundt cakes are not generally associated with any single recipe", 
           "../images/Chocolate-BundtCake.jpg",
           "DessertCakes",
           "25",
          "40",
          "60 Hr 5",
            "1 3/4 cups (248g) all-purpose flour (scoop and level to measure) 2 cups (400g) granulated sugar 1 tsp baking soda 1/2 tsp salt 1 cup unsalted butter,* melted 3/4 cup (175ml) very hot water 2/3 cup (63g) unsweetened cocoa powder (not Dutch process, scoop and level to measure) 3/4 cup (175g) sour cream, preferably room temperature	3 large eggs, preferably room temperature 2 tsp vanilla extract	4 oz. bittersweet chocolate or semi-sweet chocolate 1/2 cup heavy cream",
        "1.Preheat oven to 350 degrees. Spray a 12 - 15 cup non-stick bundt cake with non-stick cooking spray. Dust lightly with flour and cocoa powder (about 1/2 Tbsp of each). Shake out excess.2.	In a medium mixing bowl whisk together flour, sugar, baking soda and salt. Set aside.3.	In a large mixing bowl whisk together melted butter, hot water and cocoa powder.4.Add flour mixture to butter mixture and using an electric hand mixer blend until well combined.5.Add sour cream, eggs and vanilla extract. Mix until well combined.6.	Pour mixture into prepared bundt pan.7.	Bake in preheated oven until toothpick inserted into center comes out clean, about 40 - 50 minutes.8.	Let cool 8 - 10 minutes then run a knife down the sides of cake to ensure they're loose. Invert onto a wire rack to cool at least 30 minutes.9.	To make the chocolate ganache place chocolate in a medium heat proof mixing bowl.10.Heat heavy cream in a small saucepan on the stove until just simmering. Pour hot cream over chocolate (submerge chocolate if needed).11.Let mixture rest 4 minutes then stir until melted and smooth.** Pour chocolate mixture over cake. Let cool slightly.12.Cut into slices and serve."),
    new Dish("Chocolate-fondant",
           "Chocolate fondant is like dark chocolate conveyed through the medium of heat and creaminess.", 
           "../images/Chocolate-Fondant.jpg",
           "DessertCakes",
           "45",
           "15",
           "60",
          "•50g melted butterfor brushing cocoa powderfor dusting 200g good-quality dark chocolatechopped into small pieces 200g butterin small pieces 200g golden caster sugar 4 eggsand 4 yolks 200g plain flour Caramel sauce (see 'Goes well with') and vanillaice cream or orange sorbet, to serve",
         "Set the oven to 225 degrees. Grease four small ovenproof molds and dust with a little cocoa. Finely chop the chocolate. Melt the butter in a saucepan and let the chocolate melt in the hot butter. Mix the eggs and sugar in a bowl and stir until the sugar dissolves. Do not beat, just stir. Pour the chocolate into the egg mixture while stirring, sift in the cocoa and flour. Mix until smooth. Fill the molds with the chocolate batter. Bake in the middle of the oven for about 8–12 minutes, depending on how your oven usually behaves. I baked these for 10 minutes. Turn the fondant over onto a plate. Serve with fresh berries, whipped cream or vanilla ice cream.")
];


let DessertDrinks = [
    new Dish("Caramel-Gold-Chocolate", 
            "Caramel Chocolate is caramelized white chocolate. By playing with flavors and caramelization levels of sugar and milk powder we can offer the same diverse flavor profiles as we see in caramel candy and caramel fillings",
            "../images/CaramelGold-Chocolate.jpg",
            "DessertDrinks",
            "1",
            "2",
            "3",
            "200 ml Barista whole milk,g cocoa powder Van Houten full bodied 22 / 24% brown 35 g CHK-R30GOLD 50 g whipped cream Q.S. CHK-GL-22126 Q.S. CHD-ST-18970E0 Q.S. CHF-BS-22214E0",
            "Place the milk and Gold hot chocolate powder into a stainless steel jug and steam to 70c. Pipe some caramel into the glass, Top with whipped cream and decorate with the Caramel Blossoms, gold choco rocks and gold pencils."),
    new Dish("Hot-Chocolate", 
            "Hot chocolate, also known as hot cocoa, is a heated beverage consisting of shaved chocolate, melted chocolate or cocoa powder, heated milk or water, and often sugar.",
            "../images/chocolat-fondu-small.jpg",
            "DessertDrinks",
            "1",
            "5",
            "6",
            "4 cups milk (preferably whole or 2%) ¼ cup unsweetened cocoa powder ¼ cup granulated sugar ½ cup bittersweet or semisweet chocolate chips or chopped chocolate bar ¼ teaspoon pure vanilla extract", 
            "1.Place milk, cocoa powder and sugar in a small saucepan. Heat over medium/medium-low heat, whisking frequently, until warm (but not boiling). Add chocolate chips and whisk constantly until the chocolate chips melt and distribute evenly into the milk. Whisk in vanilla extract and a pinch of salt (if desired), serve immediately. "),
    new Dish("French-Hot-Chocolate",
            "But not just any chocolate: A cup of thick and rich French chocolat chaud. This exquisite blend of butter, melted chocolate, and whole milk doesn't resemble anything similar to the murky, watery hot chocolate we're used to in America.", 
            "../images/French-Hot-Chocolate.jpg",
            "DessertDrinks",
            "3",
            "5",
            "7",
            "1 ½ cups whole milk ½ cup heavy cream 2 teaspoons powdered sugar ½ teaspoon espresso powder optional, but delicious for intensifying chocolate flavor 8 ounces bittersweet chocolate at least 70%, chopped* Giant bowl of whipped cream for serving ",
            "In a medium saucepan over medium heat, whisk together the whole milk, heavy cream, powdered sugar, and espresso powder until small bubbles appear around the edges. Do not allow the mixture to boil. Remove from saucepan from the heat and stir in the chopped chocolate until melted, returning the sauce to low heat if needed for the chocolate to melt completely. Serve warm, topped with lots of whipped cream. ")
            
];
   
let DessertCookies = [

        new Dish("Kiss-Cookies", 
                "The bite-sized pieces of chocolate have a distinctive conical shape, sometimes described as flat-bottomed teardrops. Hershey's Kisses chocolates are wrapped in squares of lightweight aluminum foi.",
                "../images/KissCookies.jpg",
                "DessertCookies",
                "10",
                "10", 
                "20",
                "1 3/4 cups all-purpose flour, 1 teaspoon baking soda 1/2 teaspoon salt 1/2 cup softened butter or shortening 1/2 cup peanut butter 1/2 cup granulated sugar plus more for rolling the dough in 1/2 cup brown sugar, firmly packed	1 egg 1 teaspoon vanilla 2 tablespoons milk (optional) About 36 Hershey Kisses, unwrapped from foil",
                "1.Preheat your oven to 375 degrees F. Stir the flour, baking soda, and salt together. Set aside. 2.In another bowl, cream together the butter and peanut butter, with the sugars until light and fluffy. 3 Beat in the egg, vanilla, and milk. 4.Add the flour mixture all at once. Stir to combine well. 5.Roll one-inch balls of cookie dough between your hands, and then in granulated sugar to coat. Place on an ungreased cookie sheet."),
        new Dish("Chocolate-Chip-Cookies", 
                "What is a Chocolate Chip Cookie? A chocolate chip cookie is a sweet baked treat that is recognized by its butter flavor and the inclusion of chocolate chips. Some variations can include nuts, oatmeal or raisins as well.",
                "../images/cookies.jpg",
                "DessertCookies",
                "10",
                "15-30",
                "25-30",
                "1 cup salted butter softened 1 cup granulated sugar 1 cup light brown sugar packed 2 teaspoons pure vanilla extract 2 large eggs 3 cups all-purpose flour 1 teaspoon baking soda ½ teaspoon baking powder 1 teaspoon sea salt 2 cups chocolate chips (12 oz)", 
                "Preheat oven to 375 degrees F. Line three baking sheets with parchment paper and set aside. In a medium bowl mix flour, baking soda, baking powder and salt. Set aside. Cream together butter and sugars until combined. Beat in eggs and vanilla until light (about 1 minute). Mix in the dry ingredients until combined. Add chocolate chips and mix well. Roll 2-3 Tablespoons (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just barely starting to turn brown. Let them sit on the baking pan for 5 minutes before removing to cooling rack."),
        new Dish("Icebox-Cookies",
                "Invented in that bygone era, icebox cookies are nothing more than cookies baked from a dough that's been chilled.", 
                "../images/Icebox-Cookies.jpg",
                "DessertCookies",
                "60",
                "30",
                "1HR 30",
                "Flour •Baking Powder •	Salt •	Unsalted Butter •Granulated Sugar •Brown Sugar •Egg Yolks • Vanilla Extract • Chocolate ",
                "1.In a stand mixer fit with the paddle attachment combine the butter, brown sugar, and granulated sugar, beating until light and fluffy, about 2 minutes. Scrape down the bowl. 2.Add the egg yolks and vanilla extract and beat until fully incorporated. 3.In a separate bowl, combine the flour, baking powder, and salt. Mix to combine. 4.	Add the dry ingredients to the wet and beat until combined and no streaks of flour remain. Last, add in the chopped chocolate. 5.Divide the dough in half and roll each piece into a cylindrical log, about 1 ½ inches diameter. Wrap in plastic wrap and place in the freezer for at least an hour (or freeze for up to 3 months). 6.	When ready to bake, preheat the oven to 350°F and line a baking sheet with parchment paper. Use a very sharp thin knife to slice off ¼ inch thick cookies. Slice off as many as you want for the moment and rewrap and place the remainder of the dough back in the freezer. Bake the cookies for about 10 minutes, or until the edges are set and light golden brown. Allow to cool before enjoying with a glass of milk.")
                
    ];

const AllDishes = [...DessertCakes, ...DessertDrinks, ...DessertCookies]

export {AllDishes, DessertCakes, DessertDrinks, DessertCookies};
 