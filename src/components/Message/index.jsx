import "./style.css";
import React from "react";

export default function Message({ text, author }) {
  return (
    <div className="message">
      {author}: {text}
    </div>
  );
}
