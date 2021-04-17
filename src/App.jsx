import TopBar from "./components/TopBar/TopBar";
import SubBar from "./components/SubBar/SubBar";
import MenuBar from "./components/MenuBar/MenuBar";
import Slider from "./components/Slider/Slider";
import { SliderData } from "./components/common/data/SliderData";
import ProductCat from "./components/ProductCategory/ProductCategory";
import Footer from "./components/Footer/Footer";
import WishList from "./components/WishList/WishList";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList/ProductsList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import * as PATHS from "./components/common/Routes";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import withAuthentication from "./components/Session/withAuthentication";

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
          <Route exact path={PATHS.WISHLIST}>
            <WishList />
          </Route>
          <Route exact path={PATHS.CART}>
            <Cart />
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

export default withAuthentication(App);
