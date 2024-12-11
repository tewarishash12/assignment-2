import './App.css';
import Footer from './components/Footer';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';
import { useDarkMode } from './Context/DarkMode';


function App() {
  const { darkMode } = useDarkMode();
  return (

    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <Navbar />

      <div className={`mt-[30px] flex items-center gap-[12px] border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'} rounded-tl-[8px] h-[72px] w-full max-w-[1032px] mx-auto px-[12px] shadow-md mb-[24px]`}>
        <div className={`flex items-center gap-[12px] px-3 w-1/2 border-r ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <FaSearch size={18} color={darkMode ? "white" : "gray"} />
          <input
            type="search"
            placeholder="Job title, Position, Keyword"
            className={`outline-none flex-grow text-md h-[30px] ${darkMode ? 'text-white placeholder-gray-500 bg-gray-600' : 'text-gray-600 placeholder-gray-400 '}`}
          />
        </div>

        <div className="flex items-center gap-[12px] px-3 w-1/2">
          <FaMapMarkerAlt size={18} color="orange" />
          <input
            type="search"
            placeholder="City, State or Country"
            className={`outline-none flex-grow text-md h-[30px] ${darkMode ? 'text-white placeholder-gray-500 bg-gray-600' : 'text-gray-600 placeholder-gray-400'}`}
          />
          <MdMyLocation size={18} color={darkMode ? "white" : "gray"} />
        </div>

        <button
          type="submit"
          className={`bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 h-[50px] w-[150px] ${darkMode ? '' : ''}`}
        >
          Find Job
        </button>
      </div>

      <div className="max-w-[1032px] mx-auto">
        <JobList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
