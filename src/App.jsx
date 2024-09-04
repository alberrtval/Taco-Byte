import Restaurant from "./Components/Restaurant";
import { Routes, Route } from "react-router-dom";
import "./Styles/bootstrap.min.css";
import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import Menu from "./Components/Menu";
import Reservation from "./Components/Reservation";
import Developers from "./Components/Developers";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="App bg-primary ">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Restaurant />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="developers" element={<Developers />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
