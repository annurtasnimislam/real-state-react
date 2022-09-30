import React from 'react'
import classes from './Main.module.css'
import pic from '../../assets/mypic.jpeg'

export default function Main() {
    return (
        <div className={classes.main}>
            <section className={classes.find}>
                <div>
                    <h1>Find Real Estate <br /> That Suits You</h1>
                    <p>We provide a complete service for the sale, <br /> purchase or rental or real estate</p>
                    <div className={classes.ratings}>
                        <div>
                            <h2>250 <span>+</span></h2>
                            <span>Google Reviews</span>
                        </div>
                        <div>
                            <h2>12 <span>+</span> </h2>
                            <span>Your Experience</span>
                        </div>
                        <div>
                            <h2>50 <span>+</span></h2>
                            <span>Award Winning</span>
                        </div>
                    </div>
                </div>
                <div><img src={pic} alt="" /></div>
            </section>
            <section>
                <div>
                    <div className={classes.rent}>
                        <a href="">Rent</a>
                        <a href="">Buy</a>
                        <a href="">Sell</a>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.icon}>
                            <div><i class="fa-solid fa-earth-americas"></i></div>
                            <div>
                                <p>Location</p>
                                <p>Bangladesh, Dhaka</p>
                            </div>
                        </div>
                        <div className={classes.divider}></div>
                        <div className={classes.icon}>
                            <div><i class="fa-solid fa-house-chimney"></i></div>
                            <div>
                                <p>Property Type</p>
                                <p>Deluxe</p>
                            </div>
                        </div>
                        <div className={classes.divider}></div>
                        <div className={classes.icon}>
                            <div><i class="fa-solid fa-sack-dollar"></i></div>
                            <div>
                                <p>Average Price</p>
                                <p>$5000/$7000</p>
                            </div>
                        </div>
                        <div className={classes.divider}></div>
                        <div><a className={classes.button} href="">Search</a></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
