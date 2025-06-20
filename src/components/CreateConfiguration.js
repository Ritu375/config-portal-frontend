import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateConfiguration = () => {
  const [id, setId] = useState('');
  const [remark, setRemark] = useState('');
  const [data, setData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        id,
        remark,
        data: JSON.parse(data), 
      };

      await axios.post('http://localhost:8080/api/configurations', config);
      toast.success('Configuration created successfully!');
      
  
      setId('');
      setRemark('');
      setData('');
    } catch (error) {
      toast.error('Failed to create configuration. Please check your input.');
    }
  };

  return (
    <div className="card" style={{ padding: '20px', maxWidth: '500px' }}>
      <h2 className="page-heading">Create Configuration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label><br />
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Remark:</label><br />
          <input
            type="text"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Data(as JSON):</label><br />
          <textarea
            placeholder='e.g. [["a", "b"], ["c", "d"]]'
            value={data}
            onChange={(e) => setData(e.target.value)}
            rows={4}
            cols={40}
            required
          />
        </div>
        <br />
        <button type="submit">Create Configuration</button>
      </form>
    </div>
  );
};

export default CreateConfiguration;
