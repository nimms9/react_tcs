import './App.css';
import Header from './components/layouts/Header'
import Landing from './components/layouts/Landing'
import Footer from './components/layouts/Footer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
     <Header></Header>
     <Route exact path="/" component={Landing} /> 
     <Route exact path="/login" component={Login} />
     <Route exact path="/register" component={Register} /> 
     <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
