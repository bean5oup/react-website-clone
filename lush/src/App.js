import './App.css';
import List from './commons/component/list';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from './commons/component/menu';
import Main from './commons/component/main';
import Footer from './commons/component/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" exact element={<Main/>}></Route>
          <Route path="/list" exact element={<List/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
