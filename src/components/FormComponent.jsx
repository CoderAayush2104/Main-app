import  { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const FormComponent = () => {
  const [storeName, setStoreName] = useState('');
  const [storeDescription, setStoreDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Store data in sessionStorage for experimentation
    const micrositeData = {
      storeName,
      storeDescription,
    };
    sessionStorage.setItem('micrositeData', JSON.stringify(micrositeData));

    // Redirect to the microsite creation page
    navigate('/microsite/preview');
  };

  return (
    <div>
      <h2>Register Your Microsite</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Store Name:</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Store Description:</label>
          <textarea
            value={storeDescription}
            onChange={(e) => setStoreDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Creating Microsite...' : 'Register Microsite'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
