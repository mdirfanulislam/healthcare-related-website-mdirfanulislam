import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Navbars from './Pages/Home/Navbar/Navbars';
import Footer from './Pages/Home/Footer/Footer';
import AboutUs from './Pages/About Us/AboutUs';
import Doctors from './Pages/Doctors/Doctors';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import DepartDetails from './Pages/DepartDetails/DepartDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navbars></Navbars>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='/aboutUs'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/departDetails'>
            <DepartDetails></DepartDetails>
          </PrivateRoute>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>      
      </AuthProvider>
    </div>
  );
}

export default App;
