import CovidData from './coviddataComponent/covidData'
import Register from './RegisterAndLogin/Register';
import Login from './RegisterAndLogin/login';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const queryClient = new QueryClient()






function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Register />} />
          <Route  exact  path='/login' element={<Login />}></Route>
          <Route  exact path='/covidData' element={<CovidData />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
    ;
}

export default App;
