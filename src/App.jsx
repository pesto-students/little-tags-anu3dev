import TopBar from "./static/topbar/TopBar";
import SubBar from "./static/subbar/SubBar";
import MenuBar from "./static/menubar/MenuBar";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsList from './components/ProductsList/ProductsList';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
    <div>
    <TopBar />
      <SubBar />
      <MenuBar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/productsList/:productCategory" component={ProductsList}/>
      <Route component={PageNotFound}/>
      </Switch>
    </div>  
    </Router>  
  );
}

export default App;
