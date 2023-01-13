import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./page2.css";

const Page2 = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExercisesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTrainersClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPricingClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="page-2">
      <div className="navbar1">
        <div className="nav1">
          <button className="logo1" onClick={onLogoClick}>
            WORKOUT
          </button>
          <div className="menuright1">
            <div className="menulinks1">
              <button className="exercises1" onClick={onExercisesClick}>
                EXERCISES
              </button>
              <button className="exercises1" onClick={onTrainersClick}>
                TRAINERS
              </button>
              <button className="exercises1" onClick={onPricingClick}>
                POPULAR
              </button>
              <button className="login1" onClick={onLoginClick}>
                LOGIN
              </button>
            </div>
            <button className="hamburger-icon1">
              <img className="group-2-icon1" alt="" src="../group21.svg" />
            </button>
          </div>
        </div>
      </div>
      <div className="page-2-parent">
        <b className="page-21">Popular</b>
        <div className="popularexercisessection1">
          <div className="popularexercises1">
            <div className="title12">
              <div className="popular-exercises1">Exercises</div>
              <div className="see-more-exercises1">SEE MORE EXERCISES</div>
            </div>
            <div className="exercisecards1">
              <div className="column-11">
                <div className="exercisecard6">
                  <img
                    className="cardimage-icon2"
                    alt=""
                    src="../cardimage2@2x.png"
                  />
                  <div className="frame-div">
                    <div className="lifting-group">
                      <div className="popular-exercises1">Treadmill</div>
                      <div className="subtitle3">{`250 est calories `}</div>
                    </div>
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="../rectangle-106.svg"
                      />
                      <div className="div11">58:24</div>
                    </div>
                  </div>
                </div>
                <div className="exercisecard6">
                  <img className="group-icon" alt="" src="../image1@2x.png" />
                  <div className="frame-div">
                    <div className="lifting-group">
                      <div className="popular-exercises1">Running</div>
                      <div className="subtitle3">{`250 est calories `}</div>
                    </div>
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="../rectangle-106.svg"
                      />
                      <div className="div11">58:24</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-11">
                <div className="exercisecard8">
                  <img
                    className="group-icon"
                    alt=""
                    src="../cardimage3@2x.png"
                  />
                  <div className="frame-div">
                    <div className="lifting-group">
                      <div className="popular-exercises1">Stretching</div>
                      <div className="subtitle3">{`250 est calories `}</div>
                    </div>
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="../rectangle-108.svg"
                      />
                      <div className="div11">58:24</div>
                    </div>
                  </div>
                </div>
                <div className="exercisecard6">
                  <img className="group-icon" alt="" src="../group-63@2x.png" />
                  <div className="frame-div">
                    <div className="lifting-group">
                      <div className="popular-exercises1">Lifting</div>
                      <div className="subtitle3">{`250 est calories `}</div>
                    </div>
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="../rectangle-108.svg"
                      />
                      <div className="div11">58:24</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column-11">
                <div className="exercisecard8">
                  <img className="group-icon" alt="" src="../group-64@2x.png" />
                  <div className="frame-div">
                    <div className="lifting-group">
                      <div className="popular-exercises1">Yoga</div>
                      <div className="subtitle3">{`250 est calories `}</div>
                    </div>
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="../rectangle-1010.svg"
                      />
                      <div className="div11">58:24</div>
                    </div>
                  </div>
                </div>
                <div className="exercisecard6">
                  <img className="group-icon" alt="" src="../group-65@2x.png" />
                  <div className="frame-div">
                    <div className="lifting-group">
                      <div className="popular-exercises1">Pushup</div>
                      <div className="subtitle3">{`250 est calories `}</div>
                    </div>
                    <div className="group-div">
                      <img
                        className="rectangle-icon"
                        alt=""
                        src="../rectangle-1010.svg"
                      />
                      <div className="div11">58:24</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
