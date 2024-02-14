import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import the carousel styles

export const RotatingPhaseCards = () => {
  console.log("here")
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
    className="design-systems"
    style={{
      backgroundColor: "#040404"
    }}
  >
    <Carousel responsive={responsive}>
      <div className="group-133">
          <div className="frame-36">
            <div className="heading">
              <div className="text-wrapper-153">Phase 0</div>
              <div className="text-wrapper-154">
                Project planning and <br />
                kick-off
              </div>
            </div>
            <div className="bullet-points">
              <div className="group-134">
                <div className="text-wrapper-155">Material download</div>
                <div className="ellipse-13" />
              </div>
              <div className="group-134">
                <div className="text-wrapper-155">Kick-off and project planning</div>
                <div className="ellipse-13" />
              </div>
              <div className="group-134">
                <div className="text-wrapper-155">Ways of working</div>
                <div className="ellipse-13" />
              </div>
              <div className="group-134">
                <div className="text-wrapper-155">Goals and objectives</div>
                <div className="ellipse-13" />
              </div>
            </div>
          </div>
        </div>
        <div className="heading-wrapper">
          <div className="heading-2">
            <div className="text-wrapper-153">Phase 1</div>
            <p className="text-wrapper-154">
              UX Research and <br />
              Product Immersion
            </p>
          </div>
        </div>
        <div className="group-135">
          <div className="heading-2">
            <div className="text-wrapper-153">Phase 2</div>
            <p className="text-wrapper-154">Design System mapping and Moodboarding</p>
          </div>
        </div>
        <div className="group-136">
          <div className="overlap-group-17">
            <img
              className="mask-group-11"
              alt="Mask group"
              src="https://cdn.animaapp.com/projects/65cbae09ebe3d944fc1d2ca6/releases/65cbae90345a819824cfdb06/img/mask-group-4.png"
            />
            <div className="heading-3">
              <div className="text-wrapper-153">Phase 3</div>
              <p className="text-wrapper-154">
                MVP Style guide and <br />
                A/B Testing
              </p>
            </div>
          </div>
        </div>
    </Carousel> </div>
  );
};
