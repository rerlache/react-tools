import React, { useState } from "react";
import RQRCode from "react-qr-code";
import Style from "./qrcode.module.css";
import Generator from "./components/generator";

export default function QRCode() {
  const [qrValue, setQrValue] = useState("https://react.robinerlacher.online");
  return (
    <div id={`${Style["qrcode-container"]}`}>
      <Generator qrValue={qrValue} setQrValue={setQrValue} />
      <div className={`${Style["reader-container"]}`}>
        <h2>Reader</h2>
      </div>
    </div>
  );
}
