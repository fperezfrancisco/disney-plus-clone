import React, { useState } from "react";
import logo from "../assets/Images/disney-logo-official.png";
import mobileImg from "../assets/register-mobile.webp";
import desktopImg from "../assets/desktop-bg.jpg";
import { Link } from "react-router-dom";
import { HiArrowLeftCircle } from "react-icons/hi2";
import RegisterModal from "../components/RegisterModal";
import LoginModal from "../components/LoginModal";

function RegisterHome() {
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const handleSignUp = () => {
    setLogIn(false);
    setSignUp(true);
  };

  const handleLogIn = () => {
    setSignUp(false);
    setLogIn(true);
  };

  return (
    <div className="relative h-full">
      <section className="w-full h-full flex p-4 md:p-8">
        <div className="posterContainer flex flex-col relative mt-2 mb-4 h-full w-full">
          <div className="mobileContainer flex w-full relative rounded-t-2xl overflow-hidden">
            <img
              src={mobileImg}
              alt="Disney plus background"
              className="flex w-full h-full md:hidden"
            />
            <div
              className="overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10"
              id="registrationOverlay"
            ></div>
          </div>
          <div className="pageCopy mt-[-4rem] flex flex-col w-full h-full p-10 items-center z-30 md:items-start md:mt-16">
            <img src={logo} alt="" className="w-full max-w-[180px]" />
            <div className="heroCopy flex flex-col items-center mb-4 md:items-start">
              <p className="text-white font-bold text-lg pt-4">
                Watch the best movies
              </p>
              <p className="text-white text-base text-center w-full max-w-[350px] pt-2 md:text-left">
                Register today to start watching the most in demand movies and
                shows!
              </p>
              <div className="btnContainer mt-16 flex flex-col md:flex-row gap-4">
                <button
                  className="button py-5 px-10 bg-teal-500 text-[#131520] rounded-lg w-full min-w-[250px] max-w-[350px] font-bold hover:bg-teal-800"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
                <button
                  className="py-5 px-10 w-full min-w-[250px] max-w-[350px] font-medium border-teal-300 border-2 rounded-lg hover:bg-teal-900 text-teal-500"
                  onClick={handleLogIn}
                >
                  Log in
                </button>
              </div>
              <Link to="/">
                <p className="backBtn mt-8 font-light text-sm flex gap-2 items-center">
                  <HiArrowLeftCircle className="text-[2rem] text-teal-500" />
                  Back to application
                </p>
              </Link>
            </div>
          </div>
          <div className="desktopContainer hidden md:flex absolute w-full h-full top-0 bottom-0 left-0 right-0 min-h-[700px]">
            <img
              src={desktopImg}
              alt=""
              className="w-full object-cover h-full object-right-top rounded-lg"
            />
            <div
              className="overlay absolute top-0 bottom-0 left-0 right-0 w-full h-full z-[5]"
              id="registrationOverlayDesktop"
            ></div>
          </div>
        </div>
      </section>
      {signUp && <RegisterModal cancelModal={setSignUp} />}
      {logIn && <LoginModal cancelModal={setLogIn} />}
    </div>
  );
}

export default RegisterHome;
