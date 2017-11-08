import mithril from "mithril";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";

import './app.scss';


const App = {
  view: function () {
    return (<div className="app">
      <UserList />
    </div>);
  }
}




mithril.mount(document.getElementById("root"), App);

