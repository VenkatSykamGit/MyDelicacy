import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
        <div className="home__container">

            {/* May include an image soon on the home page as background*/}
            {/* Or also just black background with text: Delicacies, taste authentic south indian delicacies*/}

            <div className="home__row">
                <Product 
                    title = "Chicken Biryani"
                    price = {19.99}
                    image = "https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg"
                    rating = {5}
                />
                <Product 
                    title = "Naan & Paneer"
                    price = {12.99}
                    image = "https://www.carveyourcraving.com/wp-content/uploads/2019/08/easy-shahi-paneer-recipe.jpg"
                    rating = {4}
                />
            </div>

            <div className="home__row">
                <Product 
                    title = "Gulab Jamun"
                    price = {7.99}
                    image = "https://media.chefdehome.com/740/0/0/gulab-jamun/indian-gulab-jamun-chefdehome-1.jpg"
                    rating = {4}
                />
                <Product
                    title = "Mutton Curry"
                    price = {17.99}
                    image = "https://www.thespruceeats.com/thmb/kFPbPBvit_2pnmUt8lhABceAM-I=/3329x3329/smart/filters:no_upscale()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg"
                    rating = {5}
                />
                <Product 
                    title = "Sambar and Potato Fry"
                    price = {14.99}
                    image = "https://2.bp.blogspot.com/-7H55eOKGpfo/WyPmtaBqPlI/AAAAAAAAzbM/1y2OnTQCB5ACE0IoUk7fLpplL8J3HZZEQCLcBGAs/s1600/Aloogadde-palya.jpg"
                    rating = {4}
                />
            </div>

            <div className="home__row">
                <Product 
                    title = "Chicken Wrap (x2)"
                    price = {9.99}
                    image = "https://www.hiddenvalley.com/wp-content/uploads/2021/04/buffalo-ranch-chicken-wrap-RDP.jpg"
                    rating = {5}
                />
            </div>
            
        </div>
    </div>
  )
}

export default Home