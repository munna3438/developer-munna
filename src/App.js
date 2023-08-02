// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Contect from './component/contect/Contect';
import Experience from './component/experience/Experience';
import Fotter from './component/fotter/Fotter';
import Gallery from './component/gallery/Gallery';
import Intro from './component/intro/Intro';
import Navbar from './component/navbar/Navbar';
import Portfolio from './component/portfolio/Portfolio';
import Process from './component/process/Process';
import Skill from './component/skill/Skill';
function App() {
    const [clsname, setClsname] = useState('');
    const handelActive = (active) => {
        setClsname(active);
    };
    return (
        <div className={`App ${clsname}`}>
            <Navbar onActive={handelActive} />
            <div className="body">
                <div className="whatsappLink">
                    <a rel="noreferrer" target="_blank" aria-label="Chat on WhatsApp" href="https://wa.me/+8801634386892">
                        <img width={80} alt="Chat on WhatsApp" src="assets/image/whatsapp-logo-png-2263.png" />
                    </a>
                </div>
                <Intro />
                <Skill />
                <Experience />
                <Process />
                <Portfolio />
                <Gallery />
                <Contect />
            </div>
            <Fotter />
        </div>
    );
}

export default App;
