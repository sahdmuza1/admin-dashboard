import { Routes, Route } from "react-router-dom";
import Revenue from "./Pages/Revenue";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Users from "./Pages/User";
import Sales from "./Pages/Sales";
import "./App.css";
function App() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Revenue />} />
          {/* <Route path="/Users" element={<Users />} />
            <Route path="/Sales" element={<Sales />} /> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
