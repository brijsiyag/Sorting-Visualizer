import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { arrGenerator } from "../features/SortingSlice";
import QuickSortPivot from "./BodyParts/QuickSortPivot";
import Modal from "../ModalHandler/Modal";
import AboutAlgo from "./BodyParts/AboutAlgo/AboutAlgo";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Body.css";
import { Button } from "@mui/material";

const aboutAlgoStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "fit-content",
  maxHeight: "80vh",
  overflow: "auto",
  bgcolor: "#222831",
  border: "1px solid gray",
  boxShadow: "white 0 0 5px 0.5px",
  p: 4,
  borderRadius: "5px",
};

function Body() {
  const dispatch = useDispatch();
  const [aboutAlgoOpen, setAboutAlgoOpen] = React.useState(false);
  const { size, arr, speed, algo } = useSelector((state) => {
    return state.sortingVisualizer;
  });
  useEffect(() => {
    dispatch(arrGenerator());
  }, []);
  return (
    <>
      <Modal
        isOpen={aboutAlgoOpen}
        setIsOpen={setAboutAlgoOpen}
        data={{ algo: algo, style: aboutAlgoStyle }}
        Component={AboutAlgo}
      />
      <div className="body-main-container">
        <div className="body-controller-container">
          {algo === 4 && <QuickSortPivot />}
        </div>
        <div className="about-algo-button">
          <Button
            variant="outlined"
            onClick={() => {
              setAboutAlgoOpen(!aboutAlgoOpen);
            }}
            sx={{ padding: "0", width: "fit-content" }}
          >
            <InfoOutlinedIcon fontSize="large" color="info" />
          </Button>
        </div>
        <div className="bars-container">
          <div className="container red blue">
            {arr.map((item, index) => {
              return (
                <div
                  id={`id${index + 1}`}
                  className="bar"
                  style={{
                    width: 500 / size + "px",
                    height: item.value * 4,
                    transform: `translate(${
                      (600 / size + 5) * index
                    }px, ${0}px)`,
                    transition: `transform ${speed / 1500}s ease`,
                  }}
                >
                  <span
                    style={{ fontSize: `min(${300 / size}px, 2rem)` }}
                    className="barcount"
                  >
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Body;
