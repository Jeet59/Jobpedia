import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Main from "./components/main";
import Jobs from "./components/jobs";
import AddJob from "./components/addjob";
import Login from "./components/login";
import Signup from "./components/signup";
import Candidates from "./components/candidates";
import AddCandidate from "./components/addcandidate";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="add_job" element={<AddJob />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="add_candidate" element={<AddCandidate />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
