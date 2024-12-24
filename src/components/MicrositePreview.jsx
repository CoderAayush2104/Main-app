import  { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';

const MicrositePreview = () => {
  const [micrositeData, setMicrositeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = sessionStorage.getItem('micrositeData');
    if (storedData) {
      setMicrositeData(JSON.parse(storedData));
      setLoading(false);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleGenerateMicrosite = () => {
    setLoading(true);
    const nextUrl = "";
    // Simulate microsite generation
    setTimeout(() => {
      navigate(`${nextUrl}/microsite/${micrositeData.storeName}`);
    }, 3000); // Simulating deployment delay
  };

  return (
    <div>
      {loading ? (
        <p>Generating your microsite...</p>
      ) : (
        <div>
          <h2>{micrositeData.storeName} Microsite</h2>
          <p>{micrositeData.storeDescription}</p>
          <button onClick={handleGenerateMicrosite}>
            {loading ? 'Generating Microsite...' : 'Generate Microsite'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MicrositePreview;
