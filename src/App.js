import './App.scss';
import Hero from './components/index';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import Slide from './components/slide/index';
import Loadable from "react-loadable";
import "./index.scss";

const loader = () => <div></div>;
//
const HomeLazy = Loadable({
  loader: () => import("./containers/Main"),
  loading: loader,
});

function App() {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
  },[])
  return (
    <div className="App">
      <HomeLazy/>
    </div>
  );
}

export default App;
