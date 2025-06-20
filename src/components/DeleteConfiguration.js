import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteConfiguration = () => {
  const [configs, setConfigs] = useState([]);

  const fetchConfigurations = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/configurations');
      setConfigs(response.data);
    } catch (error) {
      toast.error('Failed to fetch configurations!');
    }
  };

  useEffect(() => {
    fetchConfigurations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/configurations/${id}`);
      toast.success(`Configuration with ID '${id}' deleted!`);
      setConfigs(configs.filter(config => config.id !== id));
    } catch (error) {
      toast.error('Failed to delete configuration!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 className="page-heading">Delete Configurations</h2>
      {configs.length === 0 ? (
        <p>No configurations found.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead style={{ backgroundColor: 'white' }}>
            <tr>
              <th>ID</th>
              <th>Remark</th>
              <th>Data</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: 'white' }}>
            {configs.map((config) => (
              <tr key={config.id}>
                <td>{config.id}</td>
                <td>{config.remark}</td>
                <td>{JSON.stringify(config.data)}</td>
                <td>
                  <button
                    onClick={() => handleDelete(config.id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      cursor: 'pointer',
                      borderRadius: '4px'
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DeleteConfiguration;
