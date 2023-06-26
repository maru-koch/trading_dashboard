import { Suspense, useState } from 'react';
import {Routes, Route, Navigate, Outlet, useLocation} from 'react-router-dom'
import { Home, TraderDetail} from './components/dashboard';
import { Dashboard, SignInPage, SignUpPage } from './pages';
import { AuthLayout } from './layout/AuthLayout';
import { useSelector} from 'react-redux';
import './App.css';
import auth from './api/endpoints';
import { Admin } from './components/dashboard/Home/Admin';
import { Profile } from './components/elements';

function App() {

  const [isAuth, setAuth] = useState(false)

  
const PrivateOutlet = () => {
  // requires login to access the outlets

  const { isAuthorized: isAuth } = useSelector(state => state.auth);

  const location = useLocation()
  if (!isAuth) {
        return <Navigate to="/"/>;
      }
  return (
      <div>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </div>
  );
};


const ProtectedOutlet = () => {
  // does not require log in to access the outlets
  const {user, isAuthorized} = useSelector(state => state.auth);
  console.log("USER:", user, isAuthorized)
  const location = useLocation()
  return !isAuthorized ? (
    <AuthLayout>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </AuthLayout>
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} />
  );
};


  return (
    <>
      <Routes>
          <Route path="/" element={<ProtectedOutlet/>}>
              <Route index element={<SignInPage setAuth={setAuth}/>} />
              <Route path= 'signup' element={<SignUpPage />} />
          </Route>
          <Route path='dashboard' element={<PrivateOutlet/>}>
              <Route element={<Dashboard/>}>
                  <Route path='' element={<Home/>}>
                       <Route path='' element={<Admin/>}/>
                       <Route path='traders/:id' element={<TraderDetail/>}/>
                  </Route>
                  {/* <Route path='trader/:id' element={<TraderDetail/>}/> */}
              </Route>
          </Route>
      </Routes>
    </>    
  )
}

export default App;
