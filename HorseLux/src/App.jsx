

import './App.css';
import NavBar from './Compunents/NavBar';
import AddCogging from './Pages/Services/AddCogging';
import AddCoggingRenewal from './Pages/Services/AddCoggingReneal';
import AddCoggingRnlDetail from './Pages/Services/AddCoggingRnlDetail';
import AddNote from './Pages/Services/AddNote';
import AddNoteDetail from './Pages/Services/AddNoteDetail';
import AddServices from './Pages/HorseSelection/AddServices';
// import AddServicesRecord from './Pages/Services/AddServicesRecord';
import AddTemprature from './Pages/Services/AddTemprature';
import BasicInfo from './Pages/Services/BasicInfo';
import BodyClip from './Pages/Services/BodyClip';
import ChooseRecordType from './Pages/Services/ChooseRecordType';
import Contact from './Pages/Services/Contact/Contact';
import Dashboard from './Pages/Dashboard';
import ForgetPassword from '../src/Pages/User/ForgetPassword';
import ForggotPassword from '../src/Pages/User/ForggotPassword';
import Home from './Pages/Home/Home';
import HorseDetail from './Pages/HorseDetail';
import Horses from './Pages/Horses';
import ResetPassword from '../src/Pages/User/ResetPassword';
import SignIn from '../src/Pages/User/SignIn';
import SignUp from '../src/Pages/User/SignUp';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import UploadContact from './Pages/Services/Contact/UploadContact';
import Breading from './Pages/Services/Breading/Breading';
import MilkTest from './Pages/Services/Breading/MilkTest';
import AddInsemination from './Pages/Services/Breading/AddInsemination';
import AddOvulation from './Pages/Services/Breading/AddOvulation';
import Addpregnancy from './Pages/Services/Breading/AddPregnancy';
import AddSeman from './Pages/Services/Breading/AddSeman';
import AddServicesRecord from './Pages/Services/AddServicesRecord';
import AddTemp from './Pages/HorseSelection/AddTemp';
import AddMilkTest from './Pages/HorseSelection/MilkTest';
import AddInsem from './Pages/HorseSelection/AddInsem';
import AddPreg from './Pages/HorseSelection/AddPreg';
import Addseman from './Pages/HorseSelection/AddSeman';
import NewOwnerGroup from './Pages/Services/Contact/NewOwnerGroup';
import Services from './Pages/Services/Schedule/Services';
import Appointment from './Pages/Services/Schedule/Appointement';
import Task from './Pages/Services/Schedule/Task';
// import AddServicesRecord from './Compunents/AddServicesRecord';




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
            <Route path="/addtemprature" element={<AddTemprature />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/uploadcontact" element={<UploadContact />} />
            <Route path="/breading" element={<Breading />} />
            <Route path="/milktest" element={<MilkTest />} />
            <Route path="/addinsemination" element={<AddInsemination />} />
            <Route path="/addovulation" element={<AddOvulation />} />
            <Route path="/addpregnancy" element={<Addpregnancy />} />
            <Route path="/addseman" element={<AddSeman />} />
            <Route path="/addtemp" element={<AddTemp/>} />
            <Route path="/addmilk" element={<AddMilkTest/>} />
            <Route path="/addminsem" element={<AddInsem/>} />
            <Route path="/addpreg" element={<AddPreg/>} />
            <Route path="/seman" element={<Addseman/>} />
            <Route path="/newowner" element={<NewOwnerGroup/>} />
            <Route path="/eventservices" element={<Services/>} />
            <Route path="/appointmet" element={<Appointment/>} />
            <Route path="/task" element={<Task/>} />





          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
