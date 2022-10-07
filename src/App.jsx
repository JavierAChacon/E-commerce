
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home, Product, Purchases, Login, SignUp, UserInfo } from './pages';
import { Footer, NavBar, LoadingScreen } from './components';
import { useSelector } from 'react-redux';
import ProtectedRoutes from 'components/ProtectedRoutes';


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>

    { isLoading && <LoadingScreen /> }

    <NavBar />
    <div className="content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/user" element={<UserInfo />} />
        </Route>

      </Routes>
      
    </div>
    <Footer />
  </HashRouter>
  )
}

export default App
