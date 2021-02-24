import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "./Components/Layout"
import Overview from "./Components/Overview";
import Payment from "./Components/Payment";
import Riders from "./Components/Riders"
import Trips from "./Components/Trips";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Layout>
            <Overview />
          </Layout>
        </Route>
        <Route  path='/riders'>
          <Layout>
            <Riders />
          </Layout>
        </Route>
        <Route  path='/trips'>
          <Layout>
            <Trips />
          </Layout>
        </Route>
        <Route  path='/payment'>
          <Layout>
            <Payment />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
