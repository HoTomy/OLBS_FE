import { Layout, Space } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

const { Header, Content, Footer } = Layout;


export default function App() {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/BookList">BookList</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Profile">Profile</Link>
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/bookList" element={<BookList />} />
        </Routes>
      </Content>
      <Footer>
        <p>Welcome</p>
      </Footer>
    </Router>
  )
}

/*
export default function App() {
  return (
    <Router>
      <Header>
        <nav>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/about">About</Link>
            <Link to="/newarticle">New</Link>
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/dashboard" element={<Dashboard />}  />  
          <Route path="/about" element={<About />}  />
          <Route path="/a/:aid" element = {<DetailArticle /> } />
          <Route path="/newarticle" element= {<NewArticles />} />
        </Routes>
      </Content>
      <Footer>
        <p>VT6003CEM Demo</p>
      </Footer>
    </Router>
  )
}


function App() {
  return (
    <Router>
        <Header>
          <nav>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/about">About</Link>
              <Link to="/newarticle">New</Link>
            </Space>
          </nav>
        </Header>

          <Route exact path="/" component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <PrivateRoute path="/books" component={BookList} />
          <PrivateRoute path="/books/:id" component={BookDetails} />
          <StaffRoute path="/applications" component={ApplicationList} />
          <PrivateRoute path="/applications/new" component={ApplicationForm} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

*/


