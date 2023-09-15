

import './App.css';
import NavBar from './Compunents/NavBar';
import AddCogging from './Pages/Health/AddCogging';
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
import Contact from './Pages/Contact/Contact';
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
import NewOwnerGroup from './Pages/Contact/NewOwnerGroup';
import Services from './Pages/Services/Schedule/Services';
import Appointment from './Pages/Services/Schedule/Appointement';
import Task from './Pages/Services/Schedule/Task';
import Foaling from './Pages/HorseSelection/Foaling';
import AddFoal from './Pages/Services/Breading/AddFoal';
import ContactInfo from './Pages/Contact/ContactInfo';
import ContactDetail from './Pages/Contact/ContactDetail';
import HorseReport from './Pages/Report/HorseReport';
import OwnerGroup from './Pages/Contact/OwnerGroup';
import GroupInfoandMembers from './Pages/Contact/GroupInfoMembers';
import SelectHorse from './Pages/Health/SelectHorse';
import AddDental from './Pages/Health/AddDental';
import AddDeworming from './Pages/Health/AddDeworming';
import Injury from './Pages/Health/Injury';
import AddTherapy from './Pages/Health/AddTherapy';
import AddVaccination from './Pages/Health/AddVaccination';
import AddVitals from './Pages/Health/AddVitals';
import JointInjection from './Pages/Health/JointInjection';
import AddDiognostic from './Pages/Health/AddDiognostic';
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
            <Route path='/dashboard/cogging' element={<AddCogging/>}/>
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
            <Route path="/foaling" element={<Foaling/>}/>
            <Route path="/AddFoal" element={<AddFoal/>}/>
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
            <Route path='/contactinfo' element={<ContactInfo/> }/>
           //Contact page Routes
           <Route path="/dashboard/contact" element={<Contact/>} />
           <Route path='/contactdetail' element={<ContactDetail/>} />
           <Route path='/dashboard/horsereport' element={<HorseReport/>}/>
           <Route path='/ownergroup' element={ <OwnerGroup/>}/>
           <Route path='/groupinfomember' element={ <GroupInfoandMembers/>}/>
           //Health page routes
           <Route path='/dashboard/selecthorse' element={ <SelectHorse/>}/>
           <Route path='/dashboard/adddental' element={ <AddDental/>}/>
           <Route path='/dashboard/deworming' element={ <AddDeworming/>}/>
           <Route path='/dashboard/injury' element={ <Injury/>}/>
           <Route path='/dashboard/therapy' element={ <AddTherapy/>}/>
           <Route path='/dashboard/vaccination' element={ <AddVaccination/>}/>
           <Route path='/dashboard/vitals' element={ <AddVitals/>}/>
           <Route path='/dashboard/joint-injection' element={ <JointInjection/>}/>
           <Route path='/dashboard/diagnostics' element={ <AddDiognostic/>}/>


         


          


          

    



        








          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
