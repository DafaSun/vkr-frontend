import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import AuthPage from "./pages/auth/AuthPage";
import About from "./pages/about.tsx";
//-----------FOR-MANAGER-----------
import ManagerIndex from "./pages/manager/IndexManager";
import ManagerTour from "./pages/manager/Tour/TourManager.tsx";
import ManagerUsualTour from "./pages/manager/Tour/UsualTour/UsualTourCategoriesManager.tsx";
import ManagerRoomsInCategoryUsualTour from "./pages/manager/Tour/UsualTour/UsualTourRoomsManager.tsx";
import ManagerBookingUsualTour from "./pages/manager/Tour/UsualTour/UsualTourBookingNewManager.tsx";
import ManagerSocialTour from "./pages/manager/Tour/SocialTour/SocialTourCategoriesManager.tsx";
import ManagerRoomsInCategorySocialTour from "./pages/manager/Tour/SocialTour/SocialTourRoomsManager.tsx";
import ManagerBookingSocialTour from "./pages/manager/Tour/SocialTour/SocialTourBookingNewManager.tsx";
import ManagerBookings from "./pages/manager/Bookings/BookingsManager.tsx";
import ManagerBookingsInfo from "./pages/manager/Bookings/BookingsInfoManager.tsx";
import ManagerHotel from "./pages/manager/Hotel/HotelCategoriesManager.tsx";
import ManagerRoomsInCategoryHotel from "./pages/manager/Hotel/HotelRoomsManager.tsx";
import ManagerBookingHotel from "./pages/manager/Hotel/HotelBookingManager.tsx";
import ManagerTimetable from "./pages/manager/Timetable/TimetableManager.tsx";
import ManagerWorkersTimetable from "./pages/manager/Timetable/WorkersTimetable/WorkersTimetableManager.tsx";
import ManagerWorkersTimetablePerson
    from "./pages/manager/Timetable/WorkersTimetable/WorkersTimetablePersonManager.tsx";
import ManagerGuestsTimetable from "./pages/manager/Timetable/GuestTimetable/GuestsTimetableManager.tsx";
import ManagerGuestsTimetablePerson from "./pages/manager/Timetable/GuestTimetable/GuestsTimetablePersonManager.tsx";
import ManagerInfo from "./pages/manager/Info/InfoManager.tsx";
import ManagerInfoNutrition from "./pages/manager/Info/NutritionInfoManager.tsx";
import ManagerInfoTherapy from "./pages/manager/Info/TherapyInfoManager.tsx";
import ManagerInfoFun from "./pages/manager/Info/FunInfoManager.tsx";
import ManagerGuests from "./pages/manager/Guests/GuestsManager.tsx";
import ManagerGuestsPerson from "./pages/manager/Guests/GuestsPersonManager.tsx";
import ManagerGuestsNewPerson from "./pages/manager/Guests/GuestsNewPersonManager.tsx";
import ManagerRooms from "./pages/manager/Rooms/RoomsManager.tsx";
//-----------FOR-DOCTOR-----------
import DoctorIndex from "./pages/doctor/IndexDoctor.tsx";
import DoctorFirstVisit from "./pages/doctor/FirstVisit/FirstVisitDoctor.tsx";
import DoctorFirstVisitPerson from "./pages/doctor/FirstVisit/FirstVisitPersonDoctor.tsx";
import DoctorSecondVisit from "./pages/doctor/SecondVisit/SecondVisitDoctor.tsx";
import DoctorSecondVisitPerson from "./pages/doctor/SecondVisit/SecondVisitPersonDoctor.tsx";
import DoctorDiariesPerson from "./pages/doctor/Dairies/DiariesPersonDoctor.tsx";
import DoctorTimetable from "./pages/doctor/Timetable/TimetableDoctor.tsx";
import DoctorSelfTimetable from "./pages/doctor/Timetable/SelfTimetableDoctor.tsx";
import DoctorWorkersTimetable from "./pages/doctor/Timetable/DoctorTimetable/DoctorTimetableDoctor.tsx";
import DoctorWorkersTimetablePerson from "./pages/doctor/Timetable/DoctorTimetable/DoctorTimetablePersonDoctor.tsx";
import DoctorGuestsTimetable from "./pages/doctor/Timetable/GuestsTimetable/GuestsTimetableDoctor.tsx";
import DoctorGuestsTimetablePerson from "./pages/doctor/Timetable/GuestsTimetable/GuestsTimetablePersonDoctor.tsx";
import DoctorMedicalStories from "./pages/doctor/MedicalStories/MedicalStoriesDoctor.tsx";
//-----------FOR-NURSE-----------
import NurseIndex from "./pages/nurse/IndexNurse.tsx";
import NurseWorkersTimetable from "./pages/nurse/Timetable/WorkersTimetable/WorkersTimetableNurse.tsx";
import NurseWorkersTimetablePerson from "./pages/nurse/Timetable/WorkersTimetable/WorkersTimetablePersonNurse.tsx";
import NurseGuestsTimetable from "./pages/nurse/Timetable/GuestsTimetable/GuestsTimetableNurse.tsx";
import NurseGuestsTimetablePerson from "./pages/nurse/Timetable/GuestsTimetable/GuestsTimetablePersonNurse.tsx";
import NurseSelfTimetable from "./pages/nurse/Timetable/SelfTimetable/SelfTimetableNurse.tsx";
import NurseProcedures from "./pages/nurse/ProceduresNurse/ProceduresNurse.tsx";
import NurseOneProcedure from "./pages/nurse/ProceduresNurse/OneProcedureNurse.tsx";
//-----------FOR-ADMINISTRATOR-----------
// import ReportsIndex from "./pages/reports/IndexReports.tsx";
// import ReportsAllWorkers from "./pages/reports/AllWorkers/AllWorkersReports.tsx";
// import ReportsAllWorkersPerson from "./pages/reports/AllWorkers/AllWorkersPersonReports.tsx";
// import ReportsReports from "./pages/reports/Reports/ReportsReports.tsx";
// import ReportsMedicalReport from "./pages/reports/Reports/MedicalReportReports.tsx";
// import ReportsFinancialReport from "./pages/reports/Reports/FinancialReportReports.tsx";
// import ReportsStatistics from "./pages/reports/Statistics/StatisticsReports.tsx";
// import ReportsStatisticRoom from "./pages/reports/Statistics/RoomStatisticsReports.tsx";
// import ReportsStatisticGuests from "./pages/reports/Statistics/GuestsStatisticsReports.tsx";
// import ReportsStatisticProcedures from "./pages/reports/Statistics/ProceduresStatisticsReports.tsx";
function App() {
    return (
        <Router  basename="/vkr-frontend">
            <Routes>
                <Route path="/login" element={<AuthPage/>}/>
                <Route path="/" element={<About/>}/>
                {/*-----------FOR-MANAGER-----------*/}
                <Route path="/manager" element={<ManagerIndex/>}/>
                <Route path="/manager/tour" element={<ManagerTour/>}/>
                <Route path="/manager/tour/social" element={<ManagerSocialTour/>}/>
                <Route path="/manager/tour/social/rooms-in-category" element={<ManagerRoomsInCategorySocialTour/>}/>
                <Route path="/manager/tour/social/rooms-in-category/booking" element={<ManagerBookingSocialTour/>}/>
                <Route path="/manager/tour/tour" element={<ManagerUsualTour/>}/>
                <Route path="/manager/tour/tour/rooms-in-category" element={<ManagerRoomsInCategoryUsualTour/>}/>
                <Route path="/manager/tour/tour/rooms-in-category/booking" element={<ManagerBookingUsualTour/>}/>
                <Route path="/manager/hotel" element={<ManagerHotel/>}/>
                <Route path="/manager/hotel/rooms-in-category" element={<ManagerRoomsInCategoryHotel/>}/>
                <Route path="/manager/hotel/rooms-in-category/booking" element={<ManagerBookingHotel/>}/>
                <Route path="/manager/bookings" element={<ManagerBookings/>}/>
                <Route path="/manager/bookings/info" element={<ManagerBookingsInfo/>}/>
                <Route path="/manager/guests" element={<ManagerGuests/>}/>
                <Route path="/manager/guests/person" element={<ManagerGuestsPerson/>}/>
                <Route path="/manager/guests/new" element={<ManagerGuestsNewPerson/>}/>
                <Route path="/manager/timetable" element={<ManagerTimetable/>}/>
                <Route path="/manager/guests-timetable" element={<ManagerGuestsTimetable/>}/>
                <Route path="/manager/guests-timetable/person" element={<ManagerGuestsTimetablePerson/>}/>
                <Route path="/manager/workers-timetable" element={<ManagerWorkersTimetable/>}/>
                <Route path="/manager/workers-timetable/person" element={<ManagerWorkersTimetablePerson/>}/>
                <Route path="/manager/info" element={<ManagerInfo/>}/>
                <Route path="/manager/info/nutrition" element={<ManagerInfoNutrition/>}/>
                <Route path="/manager/info/therapy" element={<ManagerInfoTherapy/>}/>
                <Route path="/manager/info/fun" element={<ManagerInfoFun/>}/>
                <Route path="/manager/rooms" element={<ManagerRooms/>}/>
                {/*-----------FOR-DOCTOR-----------*/}
                <Route path="/doctor" element={<DoctorIndex/>}/>
                <Route path="/doctor/first_visit" element={<DoctorFirstVisit/>}/>
                <Route path="/doctor/first_visit/person" element={<DoctorFirstVisitPerson/>}/>
                <Route path="/doctor/second_visit" element={<DoctorSecondVisit/>}/>
                <Route path="/doctor/second_visit/person" element={<DoctorSecondVisitPerson/>}/>
                {/*<Route path="/doctor/dairies" element={<DoctorDiaries/>}/>*/}
                <Route path="/doctor/dairies/person" element={<DoctorDiariesPerson/>}/>
                <Route path="/doctor/timetable" element={<DoctorTimetable/>}/>
                <Route path="/doctor/timetable/self" element={<DoctorSelfTimetable/>}/>
                <Route path="/doctor/workers-timetable" element={<DoctorWorkersTimetable/>}/>
                <Route path="/doctor/workers-timetable/person" element={<DoctorWorkersTimetablePerson/>}/>
                <Route path="/doctor/guests-timetable" element={<DoctorGuestsTimetable/>}/>
                <Route path="/doctor/guests-timetable/person" element={<DoctorGuestsTimetablePerson/>}/>
                <Route path="/doctor/medical_stories" element={<DoctorMedicalStories/>}/>
                {/*<Route path="/doctor/medical_stories/person" element={<DoctorMedicalStoriesPerson/>}/>*/}
                {/*-----------FOR-NURSE-----------*/}
                <Route path="/nurse" element={<NurseIndex/>}/>
                <Route path="/nurse/workers-timetable" element={<NurseWorkersTimetable/>}/>
                <Route path="/nurse/workers-timetable/person" element={<NurseWorkersTimetablePerson/>}/>
                <Route path="/nurse/guests-timetable" element={<NurseGuestsTimetable/>}/>
                <Route path="/nurse/guests-timetable/person" element={<NurseGuestsTimetablePerson/>}/>
                <Route path="/nurse/self-timetable" element={<NurseSelfTimetable/>}/>
                <Route path="/nurse/procedures" element={<NurseProcedures/>}/>
                <Route path="/nurse/procedures/one" element={<NurseOneProcedure/>}/>
                {/*-----------FOR-ADMINISTRATOR-----------*/}
                {/*<Route path="/reports" element={<ReportsIndex/>}/>*/}
                {/*<Route path="/reports/all-workers" element={<ReportsAllWorkers/>}/>*/}
                {/*<Route path="/reports/all-workers/person" element={<ReportsAllWorkersPerson/>}/>*/}
                {/*<Route path="/reports/reports/" element={<ReportsReports/>}/>*/}
                {/*<Route path="/reports/reports/medical-report" element={<ReportsMedicalReport/>}/>*/}
                {/*<Route path="/reports/reports/financial-report" element={<ReportsFinancialReport/>}/>*/}
                {/*<Route path="/reports/statistics" element={<ReportsStatistics/>}/>*/}
                {/*<Route path="/reports/statistics/statistic-room" element={<ReportsStatisticRoom/>}/>*/}
                {/*<Route path="/reports/statistics/statistic-guests" element={<ReportsStatisticGuests/>}/>*/}
                {/*<Route path="/reports/statistics/statistic-procedures" element={<ReportsStatisticProcedures/>}/>*/}
            </Routes>
        </Router>
    );
}
export default App
