"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel CSS

function HeroCarousel() {
  return (
    <div className="max-w-7xl ">
      <Carousel
        showThumbs={false} // Optionally disable thumbnails
        autoPlay={true} // Enable autoPlay
        infiniteLoop={true} // Enable infinite loop
        showIndicators={false} // Optionally disable indicators
        showStatus={false} // Optionally disable status
        interval={5000} // Set the interval for auto play
        transitionTime={500} // Set transition time
      >
        <div>
          <img src="/1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="/2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="/3.png" alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
