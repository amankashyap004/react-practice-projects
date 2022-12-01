import React from "react";

export default function Box(props) {
   const [on, setOn] = React.useState(props.on);

   function toggle() {
      setOn((prevOn) => !prevOn);
   }

   const styles = {
      backgroundColor: on ? "#222222" : "#cccccc",
   };

   return <div style={styles} className="box" onClick={toggle}></div>;
}