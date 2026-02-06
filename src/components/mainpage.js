import React, { useState } from "react";
import "./mainpage.css";
import image from "../assets/image.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";

const MainPage = () => {
    const [count, setCount] = useState(0);
    const data = ["Hello my love ❤️",
       "Today is a very special day", 
       "Do you know why ??",
       "Cause my Monica was born on this day 🎂",
       "A girl as beautiful as the night sky 🌙",
       "With a heart as pure as gold 💛",
       "and a smile that can light up the darkest days 🌟",
       "and a a humongous butt (sorry couldn't resist 😂) ",
       "my heart was empty 😢",
       "until you came into my life and filled it with love and happiness ❤️‍🔥",
       "happy birthday my love, I wish you all the happiness in the world and may all your dreams come true 🎉🎁"];
    const images = [image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
    
    function handleClick() {
        setCount(count+1);
        
    }
  return (
    <div className="container">
      <img src={images[count]} alt="Birthday moment" className="photo"></img>
      <h1 className="main-text">{data[count]}</h1>
      <button className="main-button" onClick={handleClick} disabled={count >= data.length - 1}>Click Me</button>
    </div>
  );
};

export default MainPage;