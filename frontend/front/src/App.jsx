import { NavBar } from './component/NavBar/NavBar'
import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import Footer from './component/Footer/Footer'
import men_banner from'./component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kid_banner from './component/Assets/banner_kids.png'
function App() {
 

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner}category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
        <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
