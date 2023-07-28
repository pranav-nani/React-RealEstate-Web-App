import React from 'react'
import { HiLocationMarker } from 'react-icons/hi';
import "./Hero.css"
import CountUp from 'react-countup';
// import "../../../public/her0-image.png"
const Hero = () => {
  return (
    <div>
        <section className="hero-wrapper">
            <div className="flexCenter paddings innerWidth hero-container ">
                {/* {left side} */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>Discover <br/>Most Suitable<br/> Property</h1>
                    </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you very easilty </span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you </span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className='button_new'>Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span><CountUp start={8500} end={9000} duration={4} /><span>+</span></span>
                        <span className='secondaryText'>Premium Products</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span><CountUp start={1945} end={2000} duration={4} /><span>+</span></span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span><CountUp start={15} end={28} duration={4} /><span>+</span></span>
                        <span className='secondaryText'>Awards Winning</span>
                    </div>
                </div>


                </div>
                {/* {right side} */}
                <div className=" flexCenter hero-right">
                        <div className="image-container">
                            <img src='"../../../public/hero-image.png' alt="hero png" />
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
