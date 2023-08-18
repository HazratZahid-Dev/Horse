

import './App.css';
import NavBar from './Compunents/NavBar';
import AddCogging from './Pages/AddCogging';
import AddCoggingRenewal from './Pages/AddCoggingReneal';
import AddCoggingRnlDetail from './Pages/AddCoggingRnlDetail';
import AddNote from './Pages/AddNote';
import AddNoteDetail from './Pages/AddNoteDetail';
import AddServices from './Pages/AddServices';
import AddServicesRecord from './Pages/AddServicesRecord';
import BasicInfo from './Pages/BasicInfo';
import BodyClip from './Pages/BodyClip';
import ChooseRecordType from './Pages/ChooseRecordType';
import Dashboard from './Pages/Dashboard';
import ForgetPassword from './Pages/ForgetPassword';
import ForggotPassword from './Pages/ForggotPassword';
import Home from './Pages/Home';
import HorseDetail from './Pages/HorseDetail';
import Horses from './Pages/Horses';
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
            <Route path='/forgotpassword' element={<ForggotPassword />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/horses' element={<Horses/>}/>
            <Route path='/basicInfo' element={<BasicInfo/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            <Route path='/horsedetail' element={<HorseDetail/>}/>
            <Route path='/cogging' element={<AddCogging/>}/>
            <Route path='/addservices' element={<AddServices/>}/>
            <Route path='/servicesrecord'  element={<AddServicesRecord/>}/>
            <Route path="/bodyclip/:index" element={<BodyClip />} />
            <Route path="/chooserecordtype" element={<ChooseRecordType />} />
            <Route path="/addcoggingrenewal" element={<AddCoggingRenewal />} />
            <Route path="/addcoggingrenewalDetail" element={<AddCoggingRnlDetail />} />
            <Route path="/addnote" element={<AddNote />} />
            <Route path="/addnoterecord" element={<AddNoteDetail />} />





            








            




     
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
