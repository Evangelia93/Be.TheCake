import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import { createRoot } from 'react-dom/client';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const root = createRoot(document.querySelector('.demo-carousel'));
root.render(<Review />);

class Review extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={img1} alt="Legend 1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt="Legend 1" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt="Legend 1" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};


export default Review