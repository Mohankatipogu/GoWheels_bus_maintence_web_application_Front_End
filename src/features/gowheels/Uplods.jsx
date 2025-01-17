// UploadFile.js
import React, { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async () => {

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:5002/uploads', formData);
        setMessage(response.data.message);
      } catch (error) {
        setMessage('File upload failed');
      }
    } else {
      setMessage('Please select a file to upload');
    }
  };

  return (
    <div>
        <input type="file" onChange={onFileChange} />
        <button type="submit" onClick={onSubmit}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default Upload;
