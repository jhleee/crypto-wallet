import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Wallet from './components/Wallet';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Wallet />
    </>
  );
}

export default App;
