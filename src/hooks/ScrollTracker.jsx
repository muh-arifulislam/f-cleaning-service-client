import React, { useState, useEffect } from "react";

function ScrollTracker() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setScrollDirection("down");
        console.log(currentScrollY)
      } else {
        // Scrolling up
        setScrollDirection("up");
        console.log(currentScrollY)
      }

      // Update the previous scroll position
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return <></>;
}

export default ScrollTracker;
