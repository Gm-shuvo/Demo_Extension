import React from "react";
import { render } from "react-dom";


export const Popup = () => {
  console.log('HI');
  return (
    <>
      <div>hello ....</div>
    </>
  )
}

render(<Popup />, document.getElementById('root'))