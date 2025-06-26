import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/shorten', { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      alert('Failed to shorten URL');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔗 URL Shortener</h2>
      <input
        type="text"
        value={longUrl}
        placeholder="Enter long URL"
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ width: '300px', marginRight: '1rem' }}
      />
      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <p>
          Short URL: <a href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        </p>
      )}
    </div>
  );
}

export default App;
