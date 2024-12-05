import './App.css';
import Footer from './components/Footer';
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="">
      <Navbar />
      <SearchBar />
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
