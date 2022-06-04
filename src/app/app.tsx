import React, { FC } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Catalog from "../pages/catalog/catalog";
import Header from "../components/header/header.component";


const App: FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
