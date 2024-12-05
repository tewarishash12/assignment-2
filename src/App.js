import './App.css';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="">
      <Navbar />
      <SearchBar />
      <JobList />
    </div>
  );
}

export default App;
