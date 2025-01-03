// import TitleBar from './Components/titlebar';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

const App = () => {
  // const handleLogout = () => {
  //   // Logic for logging out
  //   console.log("Logged out");
  // };

  return (
    <div className='app-container'>
      {/* <div className='glass-overlay'> */}
        
        <Sidebar/>
        <Dashboard/>
      </div>
    // </div>
  );
};

export default App;
