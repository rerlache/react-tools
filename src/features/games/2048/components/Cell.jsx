import React from "react";
import Style from '../2048.module.css'

export default function Cell() {
  console.log("coordinates", x, y)
  return <div className={`${Style.cell}`}></div>;
};
