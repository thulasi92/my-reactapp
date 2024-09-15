import {HashRouter, Router,Route,Link} from "react-router-DOMException";
import React from "react";
import Myuser from "./basic/User";
import Mybook from "./basic/books";
import Myproducts from "./basic/product";
function App() {
  return (
  <HashRouter>
  <header>
    <Link to="/User"className="toplink">My users</Link>
    <Link to= "/books"className="toplink">Mybook<Link>
    <Link to="/products"className="toplink">Myproducts</Link>
  </header>
  <Myuser/>
  <Mybook/>
  <Myproducts/>
  </HashRouter>
  );
}

export default App;
