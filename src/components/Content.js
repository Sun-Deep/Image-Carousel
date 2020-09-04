import React, { useState } from 'react'
import './Content.css'



export default function Content(){

    const data = [
        {
            image: '/slider-1.jpg',
            header: "I am in the Sky",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using."
        },
        {
            image: '/slider-2.jpg',
            header: "Sunset, Sunrise, Hello Hi !!",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia."
        },
        {
            image: '/slider-3.jpg',
            header: "Where can I get some?",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        }
    ]

    let [slider, setSlider] = useState(0)
    let [animate, setAnimate] = useState(false)

    const handleClick = (side) => {
        if (side === 'left'){
            if(slider === 0){
                setSlider(data.length - 1)
                console.log(slider)
            }else{
                setSlider(slider => slider - 1)
            }
        }else{
            console.log(slider)
            if(slider === data.length - 1){
                setSlider(0)
            }else{
                setSlider(slider + 1)
            }
        }
        setAnimate(!animate)
    }
    
    return (
        <div className="app__content">
            <button onClick={() => handleClick('left')} className="left_arrow">&#8592;</button>
            <div className="app__content__image">
                <img src={data[slider].image} alt="slider" className={animate ? "image_animate_v1" : "image_animate_v2"}  />
            </div>
            
            <div className="app__content__description">
                <h1 className={animate ? "description_animate_v1": "description_animate_v2"}>{data[slider].header}</h1>
                <p className={animate ? "description_animate_v1": "description_animate_v2"}>{data[slider].description}</p>
            </div>
            <button onClick={() => handleClick('right')} className="right_arrow">&#8594;	</button>
        </div>
    )
}