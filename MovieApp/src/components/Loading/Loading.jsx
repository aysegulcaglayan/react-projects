import React, { useState, useEffect } from 'react';
import { Commet} from 'react-loading-indicators';

const MovieList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simulating data fetching
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
      <Commet color="#ffae00" size="large" text="" textColor="" />
      ) : (
        <p>Movies loaded</p>
      )}
    </div>
  );
};

export default MovieList;
