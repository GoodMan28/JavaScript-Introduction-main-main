// Here will learn the intuition behind the layout

import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"; // this is used to create the routes
// we will create the Routes inside the BrowserRouter component
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to="/neet/LandingPage">Landing Page</Link>
      |
      <Link to="/neet/neet-class-11">Neet Class 11</Link>
      |
      <Link to="/neet/neet-class-12">Neet Class 12</Link>
        <Routes>
          <Route path="/neet" element={<Layout />}>
            {/* An absolute child route path must start with the combined path of all its parent routes. hence all the child paths start with the "/neet" */}
            <Route path="/neet/LandingPage" element={<LandingPage />} /> 
            <Route path="/neet/neet-class-11" element={<NeetLandingPage class={11} />} />
            <Route path="/neet/neet-class-12" element={<NeetLandingPage class={12} />} />
          </Route>
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

function Layout() {
// INTUTION behind the Layout and Outlet: Basically all the routes are wrapped inside a parent route and we called the Layout component
// So we render Layout, and inside it, the matching child route gets rendered inside the <Outlet />
// Outlet is basically a placeholder for the child components

    return (
        <>
            <div style={{height: "100vh"}}>
                {/* Inside here we will return a header(10%) outlet(80%) and the footer(10%) */}
                <div style={{height: "10vh", backgroundColor: "gray"}}>Header Section</div>
                <div style={{height: "80vh"}}>{<Outlet />}</div>
                <div style={{height: "10vh", backgroundColor: "gray"}}>Footer Section</div>
            </div>
        </>
    );
}

function NeetLandingPage(props) {

  let navigate = useNavigate(); // we get the state updation fucntion from this hook

  function redirect() {
    navigate("/neet/LandingPage"); // here we navigated to the home page
  }

  return (
    <>
      <div>Neet Landing page for the class {props.class}</div>
      <div><button onClick={redirect}> Go to landing page </button></div>
    </>
  );
}
