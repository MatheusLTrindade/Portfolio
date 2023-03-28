import { useState, useContext, useEffect } from "react";

import "./App.css";

import Preloader from './Components/Preloader/Preloader';
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import { themeContext } from "./Context";

import './utils/i18n';

function App() {
    const [loading, setLoading] = useState(true);
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App"
            style={{
                background: lightMode? 'var(--eggshell)' : '',
                color: lightMode? 'var(--black)' : '',
            }}
        >
            {loading ? <Preloader /> :
            <>
              <Navbar />
              <Intro />
              <Services />
              <Experience />
              {/* <Works /> */}
              <Portfolio />
              {/* <Testimonial /> */}
              <Contact />
              <Footer />
            </>
            }
        </div>
    );
}

export default App;
