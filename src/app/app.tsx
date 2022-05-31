import React, { FC } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Catalog from "../pages/catalog/catalog";


const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
