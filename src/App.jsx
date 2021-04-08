import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductsList from './components/ProductsList/ProductsList';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
    <div>
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
