import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Raghav/Navbar";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Home from "./Pages/Home";
import Placements from "./Pages/Placements";
import TryNirnay from "./Pages/TryNirnay";
import TryRaghav from "./Pages/TryRaghav";
import TryPrateek from "./Pages/TryPrateek";
import FirstTimeLogin from "./Pages/Login - First Time/FirstTimeLogin";
import PersonalDetails from "./Pages/Login - First Time/PersonalDetails";
import AcademicDetails from "./Pages/Login - First Time/AcademicDetails";
import DocumentSubmission from "./Pages/Login - First Time/DocumentSubmission";
import ChoosePreferences from "./Pages/Login - First Time/ChoosePreferences";
import ApplicantHome from "./Pages/Login - First Time/ApplicantHome";
import Successful from "./Pages/Login - First Time/Successful";
import UG_Admissions from "./Pages/UG_Admissions";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        {/* ----------ALL NO-LOGIN PAGES ROUTES---------- */}

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/try_nirnay" element={<TryNirnay />} />
          <Route path="/try_raghav" element={<TryRaghav />} />
          <Route path="/try_prateek" element={<TryPrateek />} />
          <Route path="/ug" element={<UG_Admissions />} />
        </Route>

        {/* After-Login Pages (First Time Login) =>  */}
        <Route path="/applicant/" element={<Outlet />}>
          <Route path="first_login/" element={<FirstTimeLogin />}>
            <Route index element={<PersonalDetails />} />
            <Route path="2" element={<AcademicDetails />} />
            <Route path="3" element={<DocumentSubmission />} />
            <Route path="preferences" element={<ChoosePreferences />} />
            <Route path="success" element={<Successful />} />
          </Route>
          <Route path="home" element={<ApplicantHome />} />
        </Route>

        <Route
          path="*"
          element={
            <div>
              <h1>ERROR!</h1>
              <h4>Wrong URL!</h4>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
