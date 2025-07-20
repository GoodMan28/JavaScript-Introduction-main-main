// Here we did used the Link and Navigate to do routing 
// We also wrote a custiom logic in Navigate


import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"; // this is used to create the routes
// we will create the Routes inside the BrowserRouter component
export default function App() {
  return (
    <div>
      {/* We provide the "Routes" as the children to the "BrowserRouter" */}
      {/* ALso we provide the "Route" as the children to the "Routes" */}
      <BrowserRouter>
      {/* Now to create buttons for navigating to these Endpoints in the SPA we will define them into a Link Component, inside the BrowserRouter */}
      <Link to="/">Landing Page1</Link>
      |
      <Link to="/neet-class-11">Neet Class 11</Link>
      |
      <Link to="/neet-class-12">Neet Class 12</Link>
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* These routes basically return the components mentioned in the element props */}
          <Route path="/neet-class-11" element={<NeetLandingPage class={11} />} />
          <Route path="/neet-class-12" element={<NeetLandingPage class={12} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LandingPage() {
  return (
    <div>Landing Page</div>
  );
}

function NeetLandingPage(props) {
  // we also use the useNavigate hook to redirect to any page or do custom logic such as: "Redirect to the landing page in 5"

  let navigate = useNavigate(); // we get the state updation fucntion from this hook

  function redirect() {
    navigate("/"); // here we navigated to the home page
  }
  useEffect(function () {
    // we will set a clock for 5 seconds and we will redirect it to the 

    console.log("The timeout has been created");
    
    let interval = setTimeout(function () { 
      navigate("/"); // this is not a setter, it is function hence we will simply pass the EP where we want to navigate
    }, 5000)

    return () => {
      console.log("The timeout is also cleared");
      clearTimeout(interval);
      // suppose we by ourself went to landing page before 5 seconds, then we need to clear the clock to do so
      // Refer the bottom doubts
    }
  }, [])
  return (
    <>
      <div>Neet Landing page for the class {props.class}</div>
      <div><button onClick={redirect}> Go to landing page </button></div>
    </>
  );
}

/** DOUBTS: 
 * useEffect Cleanup and Navigation Logic Explained:
 *  
 * Q1- Question 1: suppose we by ourself went to landing page before 5 seconds, then we need to clear the clock to do so .
 * 1. When a component unmounts, the cleanup function in useEffect is automatically called.
 *    This helps cancel any ongoing side-effects like timeouts, intervals, or event listeners.
 *
 * 
 * 
 * Q2- Question 2: Hence we were seeing a phenomena: when we went to "NeetLanding page with the class=12" and in 3 seconds we went to the "NeetLanding page with the class=11"
 *    then the class 11 was redirecting to the home page in remaining time of 2 seconds. 
 * 2. If a component is reused (like navigating from /neet-class-12 to /neet-class-11 using the same NeetLandingPage),
 *    React doesn't unmount it — it just changes the props. In such cases, useEffect with [] doesn't re-run,
 *    and old timeouts or side-effects can still fire.
 * 
 **/