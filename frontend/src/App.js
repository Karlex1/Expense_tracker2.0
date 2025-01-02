import TitleBar from './Components/titlebar';
import './App.css';

const App = () => {
  const handleLogout = () => {
    // Logic for logging out
    console.log("Logged out");
  };

  return (
    <div className='app-container'>
      <TitleBar onLogout={handleLogout} />
      
    </div>
  );
};

export default App;
