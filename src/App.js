import './App.css';
import Footer from './components/Footer';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Search bar section */}
      <div className="mt-[30px] flex items-center gap-[12px] border-t border-gray-300 rounded-tl-[8px] h-[72px] w-full max-w-[1032px] mx-auto px-[12px] bg-white shadow-md mb-[24px]">
        <div className="flex items-center gap-[12px] px-3 w-1/2 border-r border-gray-300">
          <FaSearch size={18} color="gray" />
          <input
            type="search"
            placeholder="Job title, Position, Keyword"
            className="outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-[12px] px-3 w-1/2">
          <FaMapMarkerAlt size={18} color="orange" />
          <input
            type="search"
            placeholder="City, State or Country"
            className="outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
          />
          <HiOutlineLocationMarker size={18} color="gray" />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 h-[50px] w-[150px]"
        >
          Find Job
        </button>
      </div>

      {/* Job List Component */}
      <div className="max-w-[1032px] mx-auto">
        <JobList />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
