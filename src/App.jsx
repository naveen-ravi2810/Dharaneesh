import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Router } from "./Routing"
import { Navbar } from "./Components"
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<Router />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
