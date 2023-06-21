import {Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from './components/dashboard';
import { Dashboard } from './pages';

// import {Home, Users, UserDetail} from './components/dashboard'


function App() {
  return (
    <>
      <Routes>
          <Route element={<Dashboard/>}>
              <Route path='/' element={<Home/>}>
                {/* <Route path='traders' element={<Trader/>}>
                  <Route path=':id' element={<TraderDetail/>}/>
                </Route> */}
              </Route>
          </Route>
      </Routes>
    </>    
  )
}

export default App;
