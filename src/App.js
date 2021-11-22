import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path='/'>
            <Login></Login>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
