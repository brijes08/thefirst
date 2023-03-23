import React, {useState} from "react";

function Greeting() {
  const curdate = new Date().getHours();
  const [GetTime, settTime] = useState(curdate);

  const updateTime = () => {
      let timeupdt = new Date().getHours();
      settTime(timeupdt)
  }
  setInterval(updateTime, 1000);

  const css = {};
  let greeting = '';
  if (GetTime >= 1 && GetTime < 12) {
    greeting = 'Good Morning';
    css.color = 'green';
  } else if (GetTime >= 12 && GetTime < 17) {
    greeting = 'Good Afternoon';
    css.color = 'yellow';
  } else if (GetTime >= 17 && GetTime < 21) {
    greeting = 'Good Evening';
    css.color = 'orange';
  } else {
    greeting = 'Hope You Had a Great Day Today';
    css.color = 'black';
  }

  return (
    <>
      <section className="greetings_sec">
        <h2>Hello Sir <span style={css}>{greeting}</span></h2>
      </section>
    </>
  )
};

export default Greeting;
