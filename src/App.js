//import logo from './logo.svg';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import TodoTemplate from './components/todo/TodoTemplate';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Join from './components/user/Join';



function App() {
  return (
    <>
      <Header/>
      {/* <TodoTemplate/> */}

      <Join/>
      <Footer/>
    </>
  );
}

export default App;
