import Header from './components/header/Header'
import Section from './components/body/Section'
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      {/* Section : intro, skills, resume, project, contact */}
      <Section />
      <Footer />
    </div>
  );
}

export default App;
