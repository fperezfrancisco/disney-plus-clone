import React, { useState } from "react";
import logo from "../assets/Images/disney-logo-official.png";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function LoginModal({ cancelModal }) {
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Logged in!");
  };

  const handleBack = () => {
    cancelModal(false);
  };

  return (
    <div
      className="p-4 flex flex-col pt-16 md:p-8 md:pt-10 md:pb-[2rem] w-full h-full min-full absolute z-50 bg-[#131520] m-auto top-0 md:top-[4rem] left-0 right-0  md:max-w-[950px] md:shadow-2xl rounded-2xl"
      id="registerModal"
    >
      <div
        className="backContainer flex absolute left-10 md:left-20 top-10 font-bold items-center gap-2 cursor-pointer"
        onClick={handleBack}
      >
        <HiArrowLeftCircle className="text-[2rem]" />
        Back
      </div>
      <div className="flex h-full flex-col items-center">
        <img
          src={logo}
          alt=""
          className="w-full max-w-[180px] md:max-w-[220px]"
        />
        <form
          className="w-full h-full py-1 mt-0 flex flex-col items-center max-w-[700px] rounded-lg"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <h2 className="formTitle text-white text-[2rem] leading-[1.25] font-medium">
            Log in
          </h2>
          <ul className="w-full flex flex-col">
            <li className="w-full py-1 my-1 flex flex-col items-start">
              <label htmlFor="signUpEmail" className="text-gray-500">
                Email:
              </label>
              <input
                id="signUpEmail"
                type="email"
                className="py-4 pl-4 rounded-lg border-2 border-teal-500 bg-transparent mt-2 w-full"
                required
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </li>
            <li className="w-full py-1 my-1 flex flex-col items-start">
              <label htmlFor="signUpPassword" className="text-gray-500">
                Password:
              </label>
              <input
                id="signUpPassword"
                type="password"
                className="py-4 pl-4 rounded-lg border-2 border-teal-500 bg-transparent mt-2 w-full"
                required
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </li>
          </ul>
          <div className="buttonContainer flex flex-col w-full gap-4 pt-10">
            <button
              className="button py-5 px-10 bg-teal-500 text-[#131520] rounded-lg w-full min-w-[250px] font-bold hover:bg-teal-800"
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
