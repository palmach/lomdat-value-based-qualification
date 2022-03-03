import React, { useState } from "react";
import "./App.css";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Container/firstPage/FirstPage";
import LastPage from "./Container/lastPage/LastPage";
import MapExer from "./Container/mapExer/MapExer";
import AboutPage from "./Container/aboutPage/AboutPage";
import SongExer from "./Container/songExer/SongExer";

import OpeningBack from "./Components/openingBack/OpeningBack";
import SkyBack from "./Components/skyBack/SkyBack";
import ExerBack from "./Components/exerBack/ExerBack";

function App() {
  const [pageNum, setPageNum] = useState(0);

  return (
    <div className="App">
      <SkyBack />
      {pageNum === 0 || pageNum === 3 ? <OpeningBack /> : <ExerBack />}
      <div className="block"></div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<FirstPage pageNum={pageNum} setPageNum={setPageNum} />}
          />
          <Route
            exact
            path="/map"
            element={<MapExer pageNum={pageNum} setPageNum={setPageNum} />}
          />
          <Route
            exact
            path="/song"
            element={<SongExer pageNum={pageNum} setPageNum={setPageNum} />}
          />
          <Route
            exact
            path="/last"
            element={<LastPage setPageNum={setPageNum} />}
          />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
