import TopBar from "./components/common/topbar/TopBar";
import SubBar from "./components/common/subbar/SubBar";
import MenuBar from "./components/common/menubar/MenuBar";
import Slider from "./components/common/slider/Slider";
import { SliderData } from "./components/common/data/SliderData";
import ProductCat from "./components/common/productCategory/ProductCategory";
import Footer from "./components/common/footer/Footer";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsList from "./components/productsList/ProductsList";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import * as PATHS from "./components/common/Routes";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <SubBar />
        <MenuBar />
        <Switch>
          <Route exact path={PATHS.HOME}>
            <Slider slides={SliderData} />
            <ProductCat />
          </Route>
          <Route exact path={PATHS.PRODUCTS_LIST}>
            <ProductsList />
          </Route>
          <Route exact path={PATHS.PRODUCT_DETAIL}>
            <ProductDetail />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
