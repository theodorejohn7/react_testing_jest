import React from 'react';

export default function FileUploadApp() {
  const [file, setFile] = React.useState('');

  function handleUpload(event) {
    setFile(event.target.files[0]);
  }
  /* eslint-disable */
  return (
    <div id="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      {file.size ? (
        <p>File size: {(file.size / 1024).toFixed(2)} Kilobytes</p>
      ) : (
        <p>File size : </p>
      )}
    </div>
  );
}
