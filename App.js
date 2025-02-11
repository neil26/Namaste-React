
import React from "react";
import ReactDOM from "react-dom/client";
const ElementComponent = () => {

    console.log("this value from arrow function", this)
  return (
    <p>
      This is the paragraph from another component nested inside heading
      component
    </p>
  );
};

const FirstComponent = function(){
    
    console.log("this value from normal function", this)
  return (
    <div id="container">
      
      <h1>
        This is first ever component created by you, good going keep it up!!
      </h1>
      <ElementComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirstComponent />);
