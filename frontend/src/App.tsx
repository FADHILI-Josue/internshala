import { useEffect, useState } from 'react'
import './App.css'
import Table1 from './components/Table1'
import Table2 from './components/table2'
import Table3 from './components/table3'
import Table4 from './components/table4'
import Table5 from './components/table5'

import { fetchTable1, fetchTable2, fetchTable3, fetchTable4, fetchTable5 } from './utils/tables'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

export interface user {
  id: any,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  income: string,
  city: string,
  car: string,
  quote: string,
  phone_price: string
}

function App() {
  const [table1, setTable1] = useState([]);
  const [table2, setTABLE2] = useState([]);
  const [table3, setTABLE3] = useState([]);
  const [table4, setTABLE4] = useState([]);
  const [table5, setTABLE5] = useState([]);
  
  
  
  
  useEffect(()=>{
        const data1 = fetchTable1().then((data)=>setTable1(data))
        const data2 = fetchTable2().then((data:any)=>setTABLE2(data))
        const data3 = fetchTable3().then((data:any)=>setTABLE3(data))
        const data4 = fetchTable4().then((data:any)=>setTABLE4(data))
        const data5 = fetchTable5().then((data:any)=>setTABLE5(data))
      
  },[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/table1' element={<Table1 data={table1}/>}/>
      <Route path='/table2' element={<Table2 data={table2}/>}/>
      <Route path='/table3' element={<Table3 data={table3}/>}/>
      <Route path='/table4' element={<Table4 data={table4}/>}/>
      <Route path='/table5' element={<Table5 data={table5}/>}/>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
