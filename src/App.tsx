import { BrowserRouter as Router ,  Route , Routes, useLocation } from 'react-router-dom'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import './assets/main.scss';
import './assets/page-styles.scss';
import Home from './components/screens/home';
import Header from './components/header';
import OnBoardingForm from './components/screens/OnBoarding';
import Sidebar from './components/sideBar';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
 
  const location = useLocation();

  return (
    <>
      <div>
      {location.pathname == '/' && <Header/>}
        {location.pathname == '/onboarding' && <Sidebar/>}
        
     
     
      <Routes> 
             
        <Route path="/" element={<Home />}/>          
          <Route path="/onboarding" element={<OnBoardingForm />}/>       
      </Routes>
    
        
        </div>       
    </>
  )
}

export default App
