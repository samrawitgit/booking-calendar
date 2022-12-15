import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Hello interviewer</h1>
      <h2>implement the following buttons</h2>
      <section className="space-x-1.5">
        <Link className="btn m5 btn-ghost normal-case text-xl" to="/calendar">
          Book a class
        </Link>
        <hr />
        <Link className="btn btn-ghost normal-case text-xl" to="/class">
          Start a class now (stretch goal)
        </Link>
      </section>
      <p>check instructions on the Readme.md file</p>
      <section>
        colors:
        <ul>
          <li>Gray: #667085</li>
          <li>Purple: #B1B2FF</li>
          <li>Green: #56C795</li>
        </ul>
      </section>
    </>
  );
};

export default Homepage;
