import React from "react";
import Description from "./Description";

function ClosedContainer({ containerNum, setContainerNum, setEnd }) {
  //useEffect to change the navigation of the button Start
  return (
    <section className="container">
      <section>
        <Description containerNum={containerNum} setEnd={setEnd} />
        <button>Start</button>
      </section>
    </section>
  );
}

export default ClosedContainer;
