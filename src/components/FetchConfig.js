import React, { useState } from 'react';
import axios from 'axios';

function FetchConfig() {
  const [id, setId] = useState('');
  const [data, setData] = useState([]);

  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:8080/api/configurations/${id}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
      setData([]);
    }
  };

  return (
    <div className="card">
      <h2>Fetch Configuration</h2>
      <form onSubmit={handleFetch}>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="result">
        {data.length > 0 && (
          <>
            <h3>Result:</h3>
            {data.map((row, index) => (
              <div key={index}>{row.join(', ')}</div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default FetchConfig;

