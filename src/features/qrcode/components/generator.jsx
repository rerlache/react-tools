import React from "react";
import RQRCode from "react-qr-code";
import Style from "../qrcode.module.css";

export default function Generator({ qrValue, setQrValue }) {
  function handleChange(value) {
    setQrValue(value);
  }
  function handleGenerate() {
    console.log("qrValue", qrValue);
  }
  return (
    <>
      <h1>QR Code Components</h1>
      <div className={`${Style["generator-container"]}`}>
        <h2>Generator</h2>
        <input
          id="generator-input"
          value={qrValue}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter your text here ..."
          type="text"
        />
        <button onClick={handleGenerate}>Generate</button>
        <RQRCode
          bgColor="white"
          fgColor="red"
          level="H"
          value={qrValue}
          className={`${Style["generated-code"]}`}
        />
      </div>
    </>
  );
}
