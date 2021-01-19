import './App.css';
import AbexTourRoute from './routes/route';
import NavbarPage from './common/header';
import SecondNavbarPage from './common/secondHeader';
import FooterPage from './common/footer';


function App() {
  return (
    <>
    
    <NavbarPage />
    <SecondNavbarPage />
    <AbexTourRoute />
    <FooterPage />
    
    </>
  );
}

export default App;
