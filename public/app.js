function App() {
  const [message, setMessage] = React.useState('Loading...');

  React.useEffect(() => {
    fetch('/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Failed to load message'));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>React + Node App</h1>
      <p>{message}</p>
      <p>This React UI is loaded in the browser and fetches from the Node server.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
