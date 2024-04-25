import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./Component/Homepage/Home";
import { Sign } from "./Component/Signin/Sign";
import { Login } from "./Component/Loged/Login";
import Mens from "./Component/Products/Mens";
import Kids from "./Component/Products/Kids";
import Women from "./Component/Products/Women";
import Mobile from "./Component/Products/Mobile";
import {Reducer} from "./Component/Reducer/Reducer";
import Addtocart from "./Component/add-to-cart/addtocart";
import Image from "./Component/singlecomponent/image";
import Buy from "./Component/proceedtobuy/buy";

function App() {
  return (
    <div className="App">
      <Reducer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign' element={<Sign />} />
            <Route path='/Login' element={<Login />} />
          <Route path='/Mens' element={<Mens />} />
            <Route path='/Vege' element={<Image />} />
            <Route path='/Kids' element={<Kids/>} />
            <Route path='/cool' element={<Image />} />
            <Route path='/groc' element={<Image />} />
            <Route path='/Women' element={<Women />} />
            <Route path='/fru' element={<Image />} />
            <Route path='/Mobile' element={<Mobile />} />
            <Route path='/Add-to-cart' element={<Addtocart />} />
            <Route path='/Buy' element={<Buy />} />


          </Routes>
        </BrowserRouter>
      </Reducer>
      

    </div>
  );
}

export default App;