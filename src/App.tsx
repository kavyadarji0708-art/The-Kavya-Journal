import { Routes, Route } from 'react-router-dom';
import Home from './site/pages/Home';
import Essays from './site/pages/Essays';
import Essay from './site/pages/Essay';
import About from './site/pages/About';
import Privacy from './site/pages/Privacy';
import SendingYourEssay from './site/pages/SendingYourEssay';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/essays" element={<Essays />} />
      <Route path="/essay/:id" element={<Essay />} />
      <Route path="/about" element={<About />} />
      <Route path="/sending-your-essay" element={<SendingYourEssay />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
