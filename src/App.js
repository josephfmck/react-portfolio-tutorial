import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';


// index attribute is used to set it to the default route
// so index is same as setting it to its parent '/'

function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
   </>
  );
}

export default App;