import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const App = () => {
  const [items, setItems] = useState([
    {
      title: "Title 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
      open: true,
    },
    {
      title: "Title 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
      open: false,
    },
    {
      title: "Title 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
      open: false,
    },
  ]);

  const toggleItems = (index) => {
    setItems(
      items.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="accordion">
        {items.map((item, i) => (
          <>
            <AccordionItem item={item} index={i} toggleItems={toggleItems} />
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
