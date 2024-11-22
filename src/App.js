import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './StarshipCard';
import './App.css'


const App = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const results = await getAllStarships();
         const data = await results.json();
        setStarships(data.results);
      } catch (error) {
        setError('Failed to fetch starships');
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <div className="starship-cards">
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default App;

