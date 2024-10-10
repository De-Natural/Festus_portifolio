import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './assets/Index';
import Description from './assets/Description';
import CaseStudy from './assets/CaseStudy';
import Services from './assets/Services';
import Testimonal from './assets/Testimonal';
import Display from './Components/Display';

function App() {
  return (
    <Router>
      <Routes>
        {/* First route for Index */}
        <Route path="/" element={<Index />} />

        {/* Main portfolio route */}
        <Route
          path="/home"
          element={
            <>
              <Description id="home" />
              <CaseStudy id="projects" />
              <Services id="services" />
              <Testimonal />
            </>
          }
        />
        
        {/* Other routes */}
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
