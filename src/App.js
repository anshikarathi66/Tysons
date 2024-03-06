import './App.css';
import React, { lazy, Suspense } from 'react';
import Navbar from './component/Navbar';
import Heading from './component/Heading';
import About from './component/About';
import Services from './component/Services';
import Testimony from './component/Testimony';
import Team from './component/Team';
import Footer from './component/Footer';

const LazyLoadedFooter = lazy(() => import('./component/Footer'));
function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <About />
      <Services />
      <Testimony />
      <Team />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedFooter />
      </Suspense>
    </div>
  );
}

export default App;
