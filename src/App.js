import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Sample from './components/layouts/Sample';
import PostList from './components/layouts/PostList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// redux 
import {Provider} from 'react-redux'
import store from './redux/store/store'



const postList=[
  {
    id:1,
    content : 'this world will be out of the pandemic soon',
    user:'abhi'
  },
  {
    id:2,
    content : 'hello from abhi',
    user:'advik'
  },
  {
    id:3,
    content : 'How r u',
    user:'abhi'
  },
  {
    id:4,
    content : 'this world will be out of the pandemic soon',
    user:'abhilkj'
  }

]
function App() {
  return (
    <Provider store={store}>
        <div className="App">
        <Router>
            <Header></Header>
            <Route exact path="/" component={Landing} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} /> 
            <Route exact path="/sample" component={Sample} />
            <Footer></Footer>
        </Router>
        </div>
    </Provider>
  );
}

export default App;

