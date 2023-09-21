

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
import AddFerrier from './Pages/Health/AddFerrier';
import AddMedSupp from './Pages/Health/AddMedSupp';
import NewMedSupp from './Pages/Health/NewMedSupp';
import Activity from './Pages/Report/Activity';
import Coggins from './Pages/Report/Coggins';
import HorseHealthReport from './Pages/Report/HorseHealthReport';
import SelectHorseHealth from './Pages/Report/SelectHorse';
import HorseHealthResult from './Pages/Report/HorseHealthResult';
import Summary from './Pages/Report/Summary';
import DuedateReport from './Pages/Report/DueDateReport';
import DueDateHorse from './Pages/Report/DueDateHorse';
import HorseTemprature from './Pages/Report/HorseTemprature';
import HorseTemp from './Pages/Report/HorseTemp';
import HorseOwner from './Pages/Report/HorseOwner';
import HorseOwnerReport from './Pages/Report/HorseOwnerReport';
import Feed from './Pages/Report/Feed/Feed';
import FeedHarry from './Pages/Report/Feed/FeedHarry';
import ActivityDetail from './Pages/ActivityDetail';
import Schedule from './Pages/Schedule/Schedule';
import CogginsReneval from './Pages/Renewal/CogginsRenewal';
import CogginsRe from './Pages/Renewal/AddCogginsRe';
import FieRenewal from './Pages/Renewal/AddFieRenewal';
import LeaseRenewal from './Pages/Renewal/LeaseRenewal';
import PassportRenewal from './Pages/Renewal/PassportRenewal';
// import HorseOwnerReport from './Pages/Report/HorseOwnerReport';
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
           <Route path='/dashboard/addferrier' element={<AddFerrier/>}/>
           <Route path='/dashboard/medSupplement' element={<AddMedSupp/>}/>
           <Route path='/NewMedSupp' element={<NewMedSupp/>}/> 
           {/* Activity Routes */}
           <Route path='/report/activity' element={<Activity/>}/> 
           <Route path='/report/coggins' element={<Coggins/>}/> 
           <Route path='/report/health' element={<HorseHealthReport/>}/> 
           <Route path='/report/selecthorse' element={<SelectHorseHealth/>}/> 
           <Route path='/report/horsehealthresult' element={<HorseHealthResult/>}/> 
           <Route path='/report/summary' element={<Summary/>}/> 
           <Route path='/report/selectduedatehorse' element={<DueDateHorse/>}/> 
           <Route path='/report/duedatereport' element={<DuedateReport/>}/> 
           <Route path='/report/horse-temprature' element={<HorseTemprature/>}/> 
           <Route path='/report/horse-temp' element={<HorseTemp/>}/> 
           <Route path='/report/horse-owner' element={<HorseOwner/>}/>
           <Route path='/report/horse-owner-report' element={<HorseOwnerReport/>}/>
           <Route path='/report/feed' element={<Feed/>}/> 
           <Route path='/report/feedharry' element={<FeedHarry/>}/> 
           <Route path='/report/activity-detail' element={<ActivityDetail/>}/> 
           <Route path='/dashboard/schedule' element={<Schedule/>}/> 
           {/* add coggins renewal */}
           <Route path='/dashboard/cogginsrenewal' element={<CogginsReneval/>}/> 
           <Route path='/dashboard/cogginsre' element={<CogginsRe/>}/>
           <Route path='/dashboard/fieRenewal' element={<FieRenewal/>}/> 
           <Route path='/dashboard/leaserenewal' element={<LeaseRenewal/>}/> 
           <Route path='/dashboard/passportrenewal' element={<PassportRenewal/>}/> 
           
























          


          

    



        








          </Routes>
        </div>
      </Router>
     
      
      
 
    </>

  );
}


export default App;
