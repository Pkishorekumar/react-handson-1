import React, { useState } from "react";
import ClassComponent from "./components/ClassComponent";
import FunctionComponents from "./components/FunctionComponents";


function App() {
  const [funcHidden, setFuncHidden] = useState(true);
  const handleClickFunction = () => setFuncHidden((current) => !current);

  const [clsHidden, setClsHidden] = useState(true);
  const handleClickClass = () => setClsHidden((current) => !current);

  return (
    <div className="App">
      <h1 className="heading">Styling using Functional and Class Component</h1>
      <div className="btn-box">
        <button className="btn btn--func" onClick={handleClickFunction}>
          To see styling in Functional Component
        </button>
        <button className="btn btn--cls" onClick={handleClickClass}>
          To see styling in Class Component
        </button>
      </div>

      <div className="component-box">
        {!funcHidden ? <FunctionComponents/> : null}
        {!clsHidden ? <ClassComponent /> : null}
      </div>
    </div>
  );
}

export default App;