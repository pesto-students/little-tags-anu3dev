import TopBar from "./static/topbar/TopBar";
import SubBar from "./static/subbar/SubBar";
import MenuBar from "./static/menubar/MenuBar";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import * as PATHS from "./components/common/constants/Routes";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <SubBar />
        <MenuBar />
        <Switch>
          <Route exact path={PATHS.HOME}>
            <Home />
          </Route>
          <Route exact path={PATHS.PRODUCTS_LIST}>
            <ProductsList />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
