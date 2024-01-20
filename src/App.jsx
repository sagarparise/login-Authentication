import LoginPage from './components/LoginPage';
import './App.css';
import ProfilePage from './components/ProfilePage';
import { useState } from 'react';

function App() {
  
const [user, setUser] = useState('');
 

  return (
    <>
      <div className="container">

  {user ? <ProfilePage user={user} setUser={setUser}/> : <LoginPage setUser={setUser}/>}

      </div>
    </>
  );
}

export default App;
