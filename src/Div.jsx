import React from 'react';



let curDate = new Date();
curDate = curDate.getHours();
let greeting = ''
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'Green';
} else if (curDate >= 12 && curDate < 16) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'grey';
} else if (curDate >= 16 && curDate < 20) {
  greeting = 'Good Evening';
  cssStyle.color = 'Orange';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'Blue';
}

function Div(){
    return(
    <div>
      <h1> Hello Sir, <span style={cssStyle}>{greeting}</span>.</h1>
    </div>
    );
}

export default Div;