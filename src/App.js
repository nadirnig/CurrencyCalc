import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/Navbar';
import Current from './components/Current';
import Convert from './components/Convert';

function App() {
  const [currency, setCurrency] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://www.cbr-xml-daily.ru/daily_json.js'
      );
      console.log(response.data);
      setCurrency(response.data);
      setLoading(false);
    } catch (err) {
      console.log('ERROR ', err);
      //add some error alert
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Convert currency={currency} />}></Route>
        <Route
          path="/profile"
          element={<Current currency={currency} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
