import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase2/v2/Phase2_Rec_PCHero_1X_1500x600._CB417375786_.jpg'
                alt=""
                ></img>

                <div className='home__row'>
                    <Product 
                    id="12345"
                    title="One Plus Sale"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"
                    rating={5}
                    price={19.99}/>

                    <Product 
                    id="12345"
                    title="One Plus Sale"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"
                    rating={5}
                    price={19.99}/>
                    

                    
                </div>    

                <div className='home__row'>
                   <Product 
                    id="12345"
                    title="One Plus Sale"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"
                    rating={5}
                    price={19.99}/>

                    <Product 
                    id="12345"
                    title="One Plus Sale"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"
                    rating={5}
                    price={19.99}/>

                    <Product 
                    id="12345"
                    title="One Plus Sale"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"
                    rating={5}
                    price={19.99}/>

                </div>

                <div className='home__row'>
                    <Product 
                    id="12345"
                    title="One Plus Sale"
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter20/OnePlus/DesktopGateway_CategoryCard_379X304._SY304_CB418738800_.jpg"
                    rating={5}
                    price={19.99}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home
