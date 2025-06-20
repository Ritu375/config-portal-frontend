import React, { useState } from 'react';
import axios from 'axios';

function UpdateRemark() {
  const [id, setId] = useState('');
  const [remark, setRemark] = useState('');
  const [msg, setMsg] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:8080/api/configurations/${id}`, {
        remark: remark
      });
      setMsg(res.data.message);
    } catch (err) {
      console.error(err);
      setMsg('Error');
    }
  };

  return (
    <div className="card">
      <h2>Update Remark</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter new remark"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {msg && <p className="response">{msg}</p>}
    </div>
  );
}

export default UpdateRemark;

