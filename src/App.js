import './App.css';
import Navbar from './components/Navbar';
import ContactUs from './components//ContactUs';

function App() {
  return (
    <>
      <Navbar title="Text Changer" />
      <div className="container my-3">
        <ContactUs heading="Enter the Text To join" />
      </div>
    </>
  );
}

export default App;
