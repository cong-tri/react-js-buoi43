import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);
  return isLoading ? (
    <div
      style={{ backgroundColor: "#023047" }}
      className="h-screen w-screen fixed top-0 left-0 z-20 flex justify-center items-center"
    >
      <PacmanLoader size={50} speedMultiplier={3} color="#ffb703" />
    </div>
  ) : (
    <></>
  );
}

export default Spinner;
