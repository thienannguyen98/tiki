import styles from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import LoginModal from './components/LoginModal/LoginModal'
import Footer from './components/Footer/Footer'
import RegisterModal from './components/RegisterModal/RegisterModal'
import EditProfile from './components/EditProfile/EditProfile'

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/login' element={<><Content /><LoginModal /></>} />
        <Route path='/register' element={<><Content /><RegisterModal /></>} />
        <Route path='/user/edit' element={<EditProfile />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App