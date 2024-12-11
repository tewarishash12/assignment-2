import './App.css';
import Footer from './components/Footer';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import { useDarkMode } from './Context/DarkMode';
import SearchBar from './components/SearchBar';


function App() {
  const { darkMode } = useDarkMode();
  return (

    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <Navbar />

      <SearchBar />

      <div className="max-w-[1032px] mx-auto">
        <JobList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
