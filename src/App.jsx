import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./loyaout/Navbar";
import CitizensTable from "./components/CitizensTable"; // Страница картотеки
import CitizenCard from "./components/CitizenCard"; // Карточка гражданина
import { citizensData } from "./data"; // Импортируем данные

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mx-auto mt-4">
      <Routes>
        <Route
          path="/citizens"
          element={<CitizensTable citizens={citizensData} />} // Прокидываем данные через props
        />
        <Route
          path="/citizen/:id"
          element={<CitizenCard citizens={citizensData} />} // Прокидываем данные через props
        />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
