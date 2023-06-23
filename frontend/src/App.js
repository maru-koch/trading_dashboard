import { Suspense, useState } from 'react';
import {Routes, Route, Navigate, Outlet, useLocation} from 'react-router-dom'
import { Home, Traders, TraderDetail} from './components/dashboard';
import { Dashboard, SignInPage, SignUpPage } from './pages';
import { AuthLayout } from './layout/AuthLayout';
import { ROUTES } from './paths/routes';
import { useSelector, useStore} from 'react-redux';
import './App.css';
import auth from './api/endpoints';

const PrivateOutlet = () => {
  // requires login to access the outlets
  const { isAuthorized: isAuth} = useSelector(state => state.auth);

  const location = useLocation()
  if (!isAuth) {
        return <Navigate to="/" state={{ from: location }}/>;
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
  const {isAuthorized: isAuth, user} = useSelector(state => state.auth);
  const store = useStore()

  console.log(store.auth)

  console.log('IS AUTH?', isAuth)
  return !isAuth ? (
    <AuthLayout>
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </AuthLayout>
  ) : (
    <Navigate to="/dashboard" />
  );
};

function App() {
  const [auth, setAuth] = useState({})
  return (
    <>
      <Routes>
          <Route path="/" element={<ProtectedOutlet auth={}/>}>
              <Route index element={<SignInPage setAuth={setAuth}/>} />
              <Route path= 'signup' element={<SignUpPage />} />
          </Route>
          <Route path='dashboard' element={<PrivateOutlet/>}>
              <Route element={<Dashboard/>}>
                  <Route index element={<Home/>}/>
                  <Route path='trader' element={<Traders/>}/>
                  <Route path='trader/:id' element={<TraderDetail/>}/>
              </Route>
          </Route>
      </Routes>
    </>    
  )
}

export default App;
