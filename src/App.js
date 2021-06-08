import './App.scss';
import NavBar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Landing from './pages/Landing';
import PostDetails from './pages/PostDetails';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
