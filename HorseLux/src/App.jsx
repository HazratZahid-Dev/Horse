import "./App.css";
import NavBar from "./Compunents/NavBar";
import AddCogging from "./Pages/Health/AddCogging";
import AddCoggingRenewal from "./Pages/Services/AddCoggingReneal";
import AddCoggingRnlDetail from "./Pages/Services/AddCoggingRnlDetail";
import AddNote from "./Pages/Services/AddNote";
import AddNoteDetail from "./Pages/Services/AddNoteDetail";
import AddServices from "./Pages/HorseSelection/AddServices";
// import AddServicesRecord from './Pages/Services/AddServicesRecord';
import AddTemprature from "./Pages/Services/AddTemprature";
import BasicInfo from "./Pages/Services/BasicInfo";
import BodyClip from "./Pages/Services/BodyClip";
import ChooseRecordType from "./Pages/Services/ChooseRecordType";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard";
import ForgetPassword from "../src/Pages/User/ForgetPassword";
import OTP from "./Pages/User/OTP";
import Home from "./Pages/Home/Home";
import HorseDetail from "./Pages/HorseDetail";
import Horses from "./Pages/Horses";
import ResetPassword from "../src/Pages/User/ResetPassword";
import SignIn from "../src/Pages/User/SignIn";
import SignUp from "../src/Pages/User/SignUp";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import UploadContact from "./Pages/Services/Contact/UploadContact";
import Breading from "./Pages/Services/Breading/Breading";
import MilkTest from "./Pages/Services/Breading/MilkTest";
import AddInsemination from "./Pages/Services/Breading/AddInsemination";
import AddOvulation from "./Pages/Services/Breading/AddOvulation";
import Addpregnancy from "./Pages/Services/Breading/AddPregnancy";
import AddSeman from "./Pages/Services/Breading/AddSeman";
import AddServicesRecord from "./Pages/Services/AddServicesRecord";
import AddTemp from "./Pages/HorseSelection/AddTemp";
import AddMilkTest from "./Pages/HorseSelection/MilkTest";
import AddInsem from "./Pages/HorseSelection/AddInsem";
import AddPreg from "./Pages/HorseSelection/AddPreg";
import Addseman from "./Pages/HorseSelection/AddSeman";
import NewOwnerGroup from "./Pages/Contact/NewOwnerGroup";
import Services from "./Pages/Services/Schedule/Services";
import Appointment from "./Pages/Services/Schedule/Appointement";
import Task from "./Pages/Services/Schedule/Task";
import Foaling from "./Pages/HorseSelection/Foaling";
import AddFoal from "./Pages/Services/Breading/AddFoal";
import ContactInfo from "./Pages/Contact/ContactInfo";
import ContactDetail from "./Pages/Contact/ContactDetail";
import HorseReport from "./Pages/Report/HorseReport";
import OwnerGroup from "./Pages/Contact/OwnerGroup";
import GroupInfoandMembers from "./Pages/Contact/GroupInfoMembers";
import SelectHorse from "./Pages/Health/SelectHorse";
import AddDental from "./Pages/Health/AddDental";
import AddDeworming from "./Pages/Health/AddDeworming";
import Injury from "./Pages/Health/Injury";
import AddTherapy from "./Pages/Health/AddTherapy";
import AddVaccination from "./Pages/Health/AddVaccination";
import AddVitals from "./Pages/Health/AddVitals";
import JointInjection from "./Pages/Health/JointInjection";
import AddDiognostic from "./Pages/Health/AddDiognostic";
import AddFerrier from "./Pages/Health/AddFerrier";
import AddMedSupp from "./Pages/Health/AddMedSupp";
import NewMedSupp from "./Pages/Health/NewMedSupp";
import Activity from "./Pages/Report/Activity";
import Coggins from "./Pages/Report/Coggins";
import HorseHealthReport from "./Pages/Report/HorseHealthReport";
import SelectHorseHealth from "./Pages/Report/SelectHorse";
import HorseHealthResult from "./Pages/Report/HorseHealthResult";
import Summary from "./Pages/Report/Summary";
import DuedateReport from "./Pages/Report/DueDateReport";
import DueDateHorse from "./Pages/Report/DueDateHorse";
import HorseTemprature from "./Pages/Report/HorseTemprature";
import HorseTemp from "./Pages/Report/HorseTemp";
import HorseOwner from "./Pages/Report/HorseOwner";
import HorseOwnerReport from "./Pages/Report/HorseOwnerReport";
import Feed from "./Pages/Report/Feed/Feed";
import FeedHarry from "./Pages/Report/Feed/FeedHarry";
import ActivityDetail from "./Pages/ActivityDetail";
import Schedule from "./Pages/Schedule/Schedule";
import CogginsReneval from "./Pages/Renewal/CogginsRenewal";
import CogginsRe from "./Pages/Renewal/AddCogginsRe";
import FieRenewal from "./Pages/Renewal/AddFieRenewal";
import LeaseRenewal from "./Pages/Renewal/LeaseRenewal";
import PassportRenewal from "./Pages/Renewal/PassportRenewal";
import Profile from "./Drawer/Profile";
import AboutUs from "./Drawer/AboutUs";
import ContactUs from "./Drawer/ContactUs";
import Subscription from "./Drawer/Subscription/Subscription";
import { useDispatch } from "react-redux";
import ProtectedRoute from "./Compunents/ProtectedRoute";
import HorseSelection from "./Compunents/HorseSelection/HorseSelection";
import { useEffect } from "react";
import { SetAuth } from "./store/Slices/AuthSlice";
import LoginProtectedRoute from "./Compunents/LoginProtectedRoute";
import { useState } from "react";
// import HorseOwnerReport from './Pages/Report/HorseOwnerReport';
// import AddServicesRecord from './Compunents/AddServicesRecord';
let user = localStorage.getItem("user");

function App() {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      dispatch(SetAuth(JSON.parse(user)));
    }
    setInterval(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route
              path="/temp"
              element={
                <HorseSelection
                  headingText={"Horse Selection"}
                  navigateTo={"/signin"}
                />
              }
            />
            <Route
              path="/"
              element={
                <LoginProtectedRoute>
                  <Home />
                </LoginProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <LoginProtectedRoute>
                  <SignIn />
                </LoginProtectedRoute>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp/:email" element={<OTP />} />
            <Route path="/resetpassword/:email" element={<ResetPassword />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/horses"
              element={
                <ProtectedRoute>
                  <Horses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/basicInfo"
              element={
                <ProtectedRoute>
                  <BasicInfo />
                </ProtectedRoute>
              }
            />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route
              path="/horsedetail"
              element={
                <ProtectedRoute>
                  <HorseDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/cogging"
              element={
                <ProtectedRoute>
                  <AddCogging />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addservices"
              element={
                <ProtectedRoute>
                  <AddServices />
                </ProtectedRoute>
              }
            />
            <Route
              path="/servicesrecord"
              element={
                <ProtectedRoute>
                  <AddServicesRecord />
                </ProtectedRoute>
              }
            />
            <Route
              path="/bodyclip/:index"
              element={
                <ProtectedRoute>
                  <BodyClip />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chooserecordtype"
              element={
                <ProtectedRoute>
                  <ChooseRecordType />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addcoggingrenewal"
              element={
                <ProtectedRoute>
                  <AddCoggingRenewal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addcoggingrenewalDetail"
              element={
                <ProtectedRoute>
                  <AddCoggingRnlDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addnote"
              element={
                <ProtectedRoute>
                  <AddNote />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addnoterecord"
              element={
                <ProtectedRoute>
                  <AddNoteDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addtemprature"
              element={
                <ProtectedRoute>
                  <AddTemprature />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/uploadcontact"
              element={
                <ProtectedRoute>
                  <UploadContact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/breading"
              element={
                <ProtectedRoute>
                  <Breading />
                </ProtectedRoute>
              }
            />
            <Route
              path="/milktest"
              element={
                <ProtectedRoute>
                  <MilkTest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addinsemination"
              element={
                <ProtectedRoute>
                  <AddInsemination />
                </ProtectedRoute>
              }
            />
            <Route
              path="/foaling"
              element={
                <ProtectedRoute>
                  <Foaling />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AddFoal"
              element={
                <ProtectedRoute>
                  <AddFoal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addovulation"
              element={
                <ProtectedRoute>
                  <AddOvulation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addpregnancy"
              element={
                <ProtectedRoute>
                  <Addpregnancy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addseman"
              element={
                <ProtectedRoute>
                  <AddSeman />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addtemp"
              element={
                <ProtectedRoute>
                  <AddTemp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addmilk"
              element={
                <ProtectedRoute>
                  <AddMilkTest />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addminsem"
              element={
                <ProtectedRoute>
                  <AddInsem />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addpreg"
              element={
                <ProtectedRoute>
                  <AddPreg />
                </ProtectedRoute>
              }
            />
            <Route
              path="/seman"
              element={
                <ProtectedRoute>
                  <Addseman />
                </ProtectedRoute>
              }
            />
            <Route
              path="/newowner"
              element={
                <ProtectedRoute>
                  <NewOwnerGroup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/eventservices"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appointmet"
              element={
                <ProtectedRoute>
                  <Appointment />
                </ProtectedRoute>
              }
            />
            <Route
              path="/task"
              element={
                <ProtectedRoute>
                  <Task />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contactinfo"
              element={
                <ProtectedRoute>
                  <ContactInfo />
                </ProtectedRoute>
              }
            />
            //Contact page Routes
            <Route
              path="/dashboard/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contactdetail"
              element={
                <ProtectedRoute>
                  <ContactDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/horsereport"
              element={
                <ProtectedRoute>
                  <HorseReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ownergroup"
              element={
                <ProtectedRoute>
                  <OwnerGroup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/groupinfomember"
              element={
                <ProtectedRoute>
                  <GroupInfoandMembers />
                </ProtectedRoute>
              }
            />
            //Health page routes
            <Route
              path="/dashboard/selecthorse"
              element={
                <ProtectedRoute>
                  <SelectHorse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/adddental"
              element={
                <ProtectedRoute>
                  <AddDental />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/deworming"
              element={
                <ProtectedRoute>
                  <AddDeworming />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/injury"
              element={
                <ProtectedRoute>
                  <Injury />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/therapy"
              element={
                <ProtectedRoute>
                  <AddTherapy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/vaccination"
              element={
                <ProtectedRoute>
                  <AddVaccination />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/vitals"
              element={
                <ProtectedRoute>
                  <AddVitals />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/joint-injection"
              element={
                <ProtectedRoute>
                  <JointInjection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/diagnostics"
              element={
                <ProtectedRoute>
                  <AddDiognostic />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/addferrier"
              element={
                <ProtectedRoute>
                  <AddFerrier />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/medSupplement"
              element={
                <ProtectedRoute>
                  <AddMedSupp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/NewMedSupp"
              element={
                <ProtectedRoute>
                  <NewMedSupp />
                </ProtectedRoute>
              }
            />
            {/* Activity Routes */}
            <Route
              path="/report/activity"
              element={
                <ProtectedRoute>
                  <Activity />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/coggins"
              element={
                <ProtectedRoute>
                  <Coggins />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/health"
              element={
                <ProtectedRoute>
                  <HorseHealthReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/selecthorse"
              element={
                <ProtectedRoute>
                  <SelectHorseHealth />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/horsehealthresult"
              element={
                <ProtectedRoute>
                  <HorseHealthResult />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/summary"
              element={
                <ProtectedRoute>
                  <Summary />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/selectduedatehorse"
              element={
                <ProtectedRoute>
                  <DueDateHorse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/duedatereport"
              element={
                <ProtectedRoute>
                  <DuedateReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/horse-temprature"
              element={
                <ProtectedRoute>
                  <HorseTemprature />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/horse-temp"
              element={
                <ProtectedRoute>
                  <HorseTemp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/horse-owner"
              element={
                <ProtectedRoute>
                  <HorseOwner />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/horse-owner-report"
              element={
                <ProtectedRoute>
                  <HorseOwnerReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/feed"
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/feedharry"
              element={
                <ProtectedRoute>
                  <FeedHarry />
                </ProtectedRoute>
              }
            />
            <Route
              path="/report/activity-detail"
              element={
                <ProtectedRoute>
                  <ActivityDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/schedule"
              element={
                <ProtectedRoute>
                  <Schedule />
                </ProtectedRoute>
              }
            />
            {/* add coggins renewal */}
            <Route
              path="/dashboard/cogginsrenewal"
              element={
                <ProtectedRoute>
                  <CogginsReneval />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/cogginsre"
              element={
                <ProtectedRoute>
                  <CogginsRe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/fieRenewal"
              element={
                <ProtectedRoute>
                  <FieRenewal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/leaserenewal"
              element={
                <ProtectedRoute>
                  <LeaseRenewal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/passportrenewal"
              element={
                <ProtectedRoute>
                  <PassportRenewal />
                </ProtectedRoute>
              }
            />
            {/* Drawer pages routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/aboutus"
              element={
                <ProtectedRoute>
                  <AboutUs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contactus"
              element={
                <ProtectedRoute>
                  <ContactUs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscription"
              element={
                <ProtectedRoute>
                  <Subscription />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
