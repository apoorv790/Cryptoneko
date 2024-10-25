// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// // import TokenList from './components/TokenList';
// import Footer from './components/Footer';
// // import CoinTable from './components/CoinTable';
// import Tokens from './pages/Tokens';
// import TokenList from './components/TokenList';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen  bg-gradient-to-b from-gray-950 via-neutral-950 to-cryptogray-900">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Hero />
//               <div className="container mx-auto px-4 py-8">
//                 <h2 className="text-3xl font-bold mb-6 text-white">Top Tokens</h2>
//                 <TokenList />
//               </div>
//             </>
//           } />
//            <Route path="/tokens" element={<Tokens />} />
//           <Route path="/search" element={<div>Search Page (to be implemented)</div>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tokens from './pages/Tokens';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-neutral-950 to-cryptogray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

