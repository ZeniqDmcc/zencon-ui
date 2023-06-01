import { useState, useRef } from "react";
import Arrow from "./Arrow";
import styles from "./Accordion.module.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? `${styles.active}` : "");
    setHeightState(
      setActive === `${styles.active}`
        ? "0px"
        : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === `${styles.active}`
        ? `${styles.accordion__icon}`
        : `${styles.accordion__icon} ${styles.rotate}`
    );
  }

  return (
    <div className="flex flex-col lg:w-8/12 w-full mx-auto rounded-lg mb-4">
      <button
        className={`${styles.accordion} ${setActive}`}
        onClick={toggleAccordion}
      >
        <h1 className={`${styles.accordion__title}`}>{props.title}</h1>
        <Arrow
          className={`${setRotate}`}
          width="40"
          height="50"
          fill={"rgba(128, 128, 128, 0.689)"}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: setHeight }}
        className={`${styles.accordion__content}`}
      >
        <div
          className={`${styles.accordion__text}`}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
