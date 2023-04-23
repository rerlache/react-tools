import React from "react";
import Style from '../2048.module.scss'

const Cell = ({ id }) => {
  return <span className={`${Style.cell}`}></span>;
};

export default Cell;
