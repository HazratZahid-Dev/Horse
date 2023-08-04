

import './App.css';
import NavBar from './Compunents/NavBar';
import ForggotPassword from './Pages/ForggotPassword';
import Home from './Pages/Home';
import ResetPassword from './Pages/ResetPassword';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 




function App() {

  return (
    <>
  
      <Router>
      <NavBar/>
     
        <div>
      
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgetpassword' element={<ForggotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            




     
            {/* <Route path='/About' element={<About/>} />
        
            <Route path='/Contact' element={<CardList/>} />
            <Route path='/detail/:name' element={<Aptech/>} />
            <Route path='/web' element={<Web/>}/>
            <Route path='/graphicdesigning' element={<GraphicDesigning/>}/>
            <Route path='/digitalmarkiter' element={<DigitalMarkiting/>}></Route>
            <Route path='/signIn' element={<SignIn/>}></Route> */}

            {/* <Footer/> */}
        
       
       
      
          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
