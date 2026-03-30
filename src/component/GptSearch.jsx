import React from "react";
import GptSearchBar from "./GptSearchBar";
import { loginBgImage } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-[10]">
        <img src={loginBgImage} alt="background Image" />
      </div>
      <GptSearchBar />
    </div>
  );
}

export default GptSearch;
