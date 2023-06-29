import { MouseEventHandler, useState } from 'react';
import './Accordion.css';

export type Topic = {
  title: string;
  content: string;
};

type ParentProps = {
  topics: Topic[];
};

type ChildProps = {
  topic: Topic;
  onToggle: MouseEventHandler;
  currentItem: boolean;
};

export default function Accordion({ topics }: ParentProps) {
  const [openItem, setOpenItem] = useState<null | number>(null);

  function handleToggle(index: number) {
    if (openItem === index) {
      return setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  }

  return (
    <div className="container">
      {topics.map((item, index) => (
        <AccordionItem
          key={index}
          onToggle={() => handleToggle(index)}
          topic={item}
          currentItem={openItem === index}
        />
      ))}
    </div>
  );
}

function AccordionItem({ topic, onToggle, currentItem }: ChildProps) {
  return (
    <div className="item-wrap">
      <div className="headline-wrap" onClick={onToggle}>
        <h3>{topic.title}</h3>
      </div>
      <div className={`content-block ${currentItem ? 'open' : ''}`}>
        <div className="content-wrap">
          <p>{topic.content}</p>
        </div>
      </div>
    </div>
  );
}
