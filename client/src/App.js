import "./App.css";
import Add from "./Components/Add";
import ContactList from "./Components/ContactList";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { toggleFalse } from "./JS/actions/edit";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>application MERN</h2>
      <Button inverted color="violet" onClick={() => dispatch(toggleFalse())}>
        <Link to="/add">Add Contact</Link>
      </Button>
      <Button inverted color="violet">
        <Link to="/">Contact List</Link>
      </Button>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;
