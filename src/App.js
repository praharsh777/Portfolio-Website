import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Add ToastContainer to display notifications */}
      <ToastContainer
        position="top-right"   // Positioning the toast at the top-right
        autoClose={5000}       // Auto close the toast after 5 seconds
        hideProgressBar={true} // Hide progress bar
        newestOnTop={true}     // Display newest on top
        closeOnClick          // Close on click
        rtl={false}            // Right-to-left text (if needed)
      />
    </div>
  );
}

export default App;
