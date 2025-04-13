import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Discover from './Components/Discover/Discover';
import Footer from './Components/Footer/Footer'
import Middle from './Components/Middle/Middle'
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile'
import Review from './Components/Review/Review'
import Trip from './Components/Trip/Trip'
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Discover />
      <Profile />
      {/* <Footer />
      <Review />
      <Trip /> */}
    </div>
  )
}
export default App