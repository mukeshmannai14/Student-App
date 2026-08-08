import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<StudentList />}
        />

        <Route
          path="/favourites"
          element={<FavouriteStudents />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;