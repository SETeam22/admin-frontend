import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
//import AdminLogin from './pages/Authentication/AdminLogin';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import AddService from './pages/Deliveries/AddService';
import MyDeliveries from './pages/Deliveries/MyDeliveries';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | Admin" />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Admin" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Admin" />
              <Profile />
            </>
          }
        />
        <Route
          path="/employees"
          element={
            <>
              <PageTitle title="Employees | Admin" />
              <Employees />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <PageTitle title="Orders | Admin" />
              <Orders />
            </>
          }
        />
        <Route
          path="/deliveries/addservice"
          element={
            <>
              <PageTitle title="Deliveries | Admin" />
              <AddService />
            </>
          }
        />
        <Route
          path="/deliveries/mydeliveries"
          element={
            <>
              <PageTitle title="Deliveries | Admin" />
              <MyDeliveries />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Admin" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Admin" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Admin" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Admin" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Admin" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Admin" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Admin" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Admin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Admin" />
              <SignUp />
            </>
          }
        />
        {/* <Route
          path="/auth/admin"
          element={
            <>
              <PageTitle title="Signin | Admin" />
              <AdminLogin />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
