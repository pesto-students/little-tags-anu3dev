import TopBar from "./static/topbar/TopBar";
import SubBar from "./static/subbar/SubBar";
import MenuBar from "./static/menubar/MenuBar";
<<<<<<< HEAD
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductsList from "./components/ProductsList/ProductsList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import * as PATHS from "./components/common/constants/Routes";
=======
import Slider from "./static/slider/Slider";
import { SliderData } from './constant/SliderData';
import ProductCat from "./static/productCat/ProductCat";
import Footer from "./static/footer/Footer"
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsList from './components/ProductsList/ProductsList';
import PageNotFound from './components/PageNotFound/PageNotFound';
>>>>>>> anurag

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
=======
    <div>
      <TopBar />
      <SubBar />
      <MenuBar />
      <Slider slides={SliderData} />
      <ProductCat />
      <Footer />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/productsList/:productCategory" component={ProductsList}/>
      <Route component={PageNotFound}/>
      </Switch>
    </div>  
    </Router>  
>>>>>>> anurag
  );
}

export default App;
