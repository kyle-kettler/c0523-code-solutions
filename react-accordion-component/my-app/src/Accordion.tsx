import { useState } from 'react';
import './Accordion.css';

export type Topic = {
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export default function Accordion({ topics }: AccordionProps) {
  const [openItem, setOpenItem] = useState<number>();

  function handleToggle(index: number): void {
    setOpenItem(openItem === index ? undefined : index);
  }

  return (
    <div className="container">
      {topics.map((item, index) => (
        <AccordionItem
          key={index}
          onToggle={() => handleToggle(index)}
          topic={item}
          isOpen={openItem === index}
        />
      ))}
    </div>
  );
}

type ItemProps = {
  topic: Topic;
  onToggle: () => void;
  isOpen: boolean;
};

function AccordionItem({ topic, onToggle, isOpen }: ItemProps) {
  return (
    <div className="item-wrap">
      <div className="headline-wrap" onClick={onToggle}>
        <h3>{topic.title}</h3>
      </div>
      <div className={`content-block ${isOpen ? 'open' : ''}`}>
        <div className="content-wrap">
          <p>{topic.content}</p>
        </div>
      </div>
    </div>
  );
}
