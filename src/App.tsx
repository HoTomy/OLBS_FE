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
          </Space>
        </nav>
      </Header>
      <Content>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/bookList" element={<BookList />} />
          <Route path="/Login" element = {<Login /> } />
          <Route path="/Register" element = {<Register /> } />
        </Routes>
      </Content>
      <Footer>
        <p>OnLine BookStore</p>
      </Footer>
    </Router>
  )
}

