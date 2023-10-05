import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import ApplicationList from './components/ApplicationList';
import ApplicationForm from './components/ApplicationForm';
import Profile from './components/Profile';
import PrivateRoute from './components/protected/PrivateRoute';
import StaffRoute from './components/protected/StaffRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/books" component={BookList} />
        <PrivateRoute path="/books/:id" component={BookDetails} />
        <StaffRoute path="/applications" component={ApplicationList} />
        <PrivateRoute path="/applications/new" component={ApplicationForm} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;