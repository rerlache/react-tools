import React from "react";
import Style from "../got.module.css";
import RandomQuote from "../components/randomQuote";

export default function GotQuotes() {
  return (
    <section className={`${Style["random-quote-container"]}`}>
      <RandomQuote />
    </section>
  );
}