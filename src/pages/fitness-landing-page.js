import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./fitness-landing-page.css";

const FitnessLandingPage = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExercisesClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTrainers1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='trainers']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingClick = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExercisesSection']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton2Click = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/page-2");
  }, [navigate]);

  return (
    <div className="fitnesslandingpage">
      <div className="navbar">
        <div className="nav">
          <button className="logo" onClick={onLogoClick}>
            WORKOUT
          </button>
          <div className="menuright">
            <div className="menulinks">
              <button className="exercises" onClick={onExercisesClick}>
                EXERCISES
              </button>
              <button className="exercises" onClick={onTrainers1Click}>
                TRAINERS
              </button>
              <button className="exercises" onClick={onPricingClick}>
                POPULAR
              </button>
              <button className="login" onClick={onLoginClick}>
                LOGIN
              </button>
            </div>
            <button className="hamburger-icon">
              <img className="group-2-icon" alt="" src="../group2.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="herosection">
        <div className="herotext">
          <div className="newcallout">
            <div className="newcallout-child" />
            <div className="newcallout-item" />
            <div className="new">NEW</div>
            <div className="high-intensity-workout">
              High Intensity workout to burn calories
            </div>
          </div>
          <div className="herocta">
            <div className="title">
              <p className="cardio">{`Shape `}</p>
              <p className="exercise">Up</p>
            </div>
            <div className="subtitle">
              Unlock your potential and achieve your fitness goals with our customized training programs and expert guidance.
            </div>
            <div className="buttonrow">
              <button className="button" onClick={onButtonClick}>
                <div className="get-started">Get Started</div>
              </button>
              <button className="button1" onClick={onButton1Click}>
                <div className="get-started">Preview</div>
              </button>
            </div>
          </div>
        </div>
        <img className="heroimage-icon" alt="" src="../vector@2x.png" />
      </div>
      <div
        className="popularexercisessection"
        data-scroll-to="popularExercisesSection"
      >
        <div className="popularexercises">
          <div className="title1">
            <div className="popular-exercises">Popular Exercises</div>
            <div className="see-more-exercises">SEE MORE EXERCISES</div>
          </div>
          <div className="exercisecards">
            <div className="column-1">
              <div className="exercisecard">
                <img
                  className="cardimage-icon"
                  alt=""
                  src="../cardimage@2x.png"
                />
                <div className="text">
                  <div className="titles">
                    <div className="popular-exercises">Treadmill</div>
                    <div className="subtitles">{`250 est calories `}</div>
                  </div>
                  <div className="duration">
                    <img
                      className="duration-child"
                      alt=""
                      src="../rectangle-10.svg"
                    />
                    <div className="div">58:24</div>
                  </div>
                </div>
              </div>
              <div className="exercisecard">
                <img className="image-icon" alt="" src="../image@2x.png" />
                <div className="text">
                  <div className="titles">
                    <div className="popular-exercises">Running</div>
                    <div className="subtitles">{`250 est calories `}</div>
                  </div>
                  <div className="duration">
                    <img
                      className="duration-child"
                      alt=""
                      src="../rectangle-10.svg"
                    />
                    <div className="div">58:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-1">
              <div className="exercisecard2">
                <img className="image-icon" alt="" src="../cardimage1@2x.png" />
                <div className="text">
                  <div className="titles">
                    <div className="popular-exercises">Stretching</div>
                    <div className="subtitles">{`250 est calories `}</div>
                  </div>
                  <div className="duration">
                    <img
                      className="duration-child"
                      alt=""
                      src="../rectangle-102.svg"
                    />
                    <div className="div">58:24</div>
                  </div>
                </div>
              </div>
              <div className="exercisecard">
                <img className="image-icon" alt="" src="../group-6@2x.png" />
                <div className="text">
                  <div className="titles">
                    <div className="popular-exercises">Lifting</div>
                    <div className="subtitles">{`250 est calories `}</div>
                  </div>
                  <div className="duration">
                    <img
                      className="duration-child"
                      alt=""
                      src="../rectangle-102.svg"
                    />
                    <div className="div">58:24</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-1">
              <div className="exercisecard2">
                <img className="image-icon" alt="" src="../group-61@2x.png" />
                <div className="text">
                  <div className="titles">
                    <div className="popular-exercises">Yoga</div>
                    <div className="subtitles">{`250 est calories `}</div>
                  </div>
                  <div className="duration">
                    <img
                      className="duration-child"
                      alt=""
                      src="../rectangle-104.svg"
                    />
                    <div className="div">58:24</div>
                  </div>
                </div>
              </div>
              <div className="exercisecard">
                <img className="image-icon" alt="" src="../group-62@2x.png" />
                <div className="text">
                  <div className="titles">
                    <div className="popular-exercises">Pushup</div>
                    <div className="subtitles">{`250 est calories `}</div>
                  </div>
                  <div className="duration">
                    <img
                      className="duration-child"
                      alt=""
                      src="../rectangle-104.svg"
                    />
                    <div className="div">58:24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trainers1" data-scroll-to="trainers">
        <div className="trainerscta">
          <div className="ctaframe">
            <div className="background" />
            <div className="title5">
              <h2 className="workout-program-made-container">
                <p className="cardio">Workout</p>
                <p className="cardio">Program</p>
                <p className="cardio">Made</p>
                <p className="exercise">For You</p>
              </h2>
              <img className="splash-icon" alt="" src="../splash.svg" />
            </div>
            <div className="description">
              <div className="lorem-ipsum-dolor">
                Are you ready to transform your body and mind? Our fitness program is designed to help you unlock your full potential. Join us today and start your journey to becoming the best version of yourself!
              </div>
              <button className="button2" onClick={onButton2Click}>
                <div className="get-started1">Get Started</div>
              </button>
            </div>
          </div>
        </div>
        <div className="trainersimages">
          <div className="desktop">
            <div className="trainer-3">
              <img
                className="trainer-3-child"
                alt=""
                src="../group-142@2x.png"
              />
              <div className="samantha-william">Samantha William</div>
              <div className="trainer">Trainer</div>
            </div>
            <div className="trainer-2">
              <img
                className="trainer-3-child"
                alt=""
                src="../group-147@2x.png"
              />
              <div className="samantha-william">Karen Summer</div>
              <div className="trainer">Trainer</div>
            </div>
            <div className="trainer-1">
              <img
                className="trainer-1-child"
                alt=""
                src="../group-146@2x.png"
              />
              <div className="jonathan-wise">Emily Michaels</div>
              <div className="trainer2">Trainer</div>
            </div>
          </div>
          <div className="tablet">
            <div className="trainer-31">
              <img
                className="trainer-3-item"
                alt=""
                src="../group-1471@2x.png"
              />
              <div className="karen-summer1">Karen Summer</div>
              <div className="trainer3">Trainer</div>
            </div>
            <div className="trainer-21">
              <img
                className="trainer-2-item"
                alt=""
                src="../group-1461@2x.png"
              />
              <div className="jonathan-wise1">Jonathan Wise</div>
              <div className="trainer4">Trainer</div>
            </div>
            <div className="trainer-11">
              <img
                className="trainer-1-item"
                alt=""
                src="../group-1421@2x.png"
              />
              <div className="samantha-william1">Samantha William</div>
              <div className="trainer5">Trainer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="categoriessection">
        <div className="popularexercises">
          <div className="category">
            <div className="div6">01</div>
            <div className="action">
              <div className="titles3">
                <div className="title6">Workout at Home</div>
                <div className="courses">15 videos</div>
              </div>
              <img className="arrow-icon" alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className="separator-icon" alt="" src="../separator.svg" />
          <div className="category">
            <div className="div6">02</div>
            <div className="action">
              <div className="titles3">
                <div className="title6">Stay Strong and Fit</div>
                <div className="courses">48 videos</div>
              </div>
              <img className="arrow-icon" alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className="separator-icon" alt="" src="../separator.svg" />
          <div className="category">
            <div className="div6">03</div>
            <div className="action">
              <div className="titles3">
                <div className="title6">High Intensity</div>
                <div className="courses">48 videos</div>
              </div>
              <img className="arrow-icon" alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className="separator-icon" alt="" src="../separator.svg" />
          <div className="category">
            <div className="div6">04</div>
            <div className="action">
              <div className="titles3">
                <div className="title6">Simple Workout</div>
                <div className="courses">48 videos</div>
              </div>
              <img className="arrow-icon" alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className="separator-icon" alt="" src="../separator.svg" />
          <div className="category">
            <div className="div6">05</div>
            <div className="action">
              <div className="titles3">
                <div className="title6">Burn Calories</div>
                <div className="courses">48 videos</div>
              </div>
              <img className="arrow-icon" alt="" src="../arrow.svg" />
            </div>
          </div>
          <img className="separator-icon" alt="" src="../separator.svg" />
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribeform">
          <div className="title11">Get the Newsletter</div>
          <form
            className="form"
            action="https://www.locofy.ai"
            method="post"
            id="formID"
          >
            <input className="input" type="text" placeholder="Email" />
            <button
              className="button3"
              type="submit"
              form="formID"
              onClick={onButton3Click}
            >
              <div className="get-started1">Subscribe</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FitnessLandingPage;
