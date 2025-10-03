
import './App.css'
import Navbar from './component/Navbar/Navbar';
import DaisyNav from './component/DaisyNav/DaisyNav';
import { Suspense } from 'react';
import PriceingOptions from './component/PriceingOption/PriceingOptions';
import ReChart from './component/ReCharts/ReChart';

const pricePromise = fetch('priceing.json').then(res => res.json());


function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
        {/* <h1>Vite + React</h1> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PriceingOptions pricePromise={pricePromise}></PriceingOptions>
        </Suspense>


        <ReChart></ReChart>
      </main>

      <footer></footer>
    </>
  );
}

export default App
