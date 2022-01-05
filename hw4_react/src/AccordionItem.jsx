import React from "react";
import "./AccordionItem.css";

export default function AccordionItem({ item, index, toggleItems }) {
  return (
    <div className={item.open ? "accordion-item active" : "accordion-item"} key={index} onClick={() => toggleItems(index)}>
      <div className="accordion-title">{item.title}</div>
      <div className="accordion-content">{item.content}</div>
    </div>
  );
}
