import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

import './utils/i18n';

function App() {
    const theme = useContext(themeContext);
    const lightMode = theme.state.lightMode;

    return (
        <div className="App"
            style={{
                background: lightMode? 'var(--eggshell)' : '',
                color: lightMode? 'var(--black)' : '',
            }}
        >
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
