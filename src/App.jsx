import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Dashboard from "./components/Dashboard";
import CitizensTable from "./components/CitizensTable";
import CitizenCard from "./components/CitizenCard";
import { citizensData } from "./data";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Dashboard citizens={citizensData}/>} />
          <Route
            path="/citizens"
            element={<CitizensTable citizens={citizensData} />}
          />
          <Route
            path="/citizen/:id"
            element={<CitizenCard citizens={citizensData} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
