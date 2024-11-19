import Navbar from './sections/navbar';
import About from './sections/about';
import Catering from './sections/catering';
import FollowBanner from './sections/followbanner';
import Hero from './sections/hero';
import Contact from './sections/contact';
import ImageCarousel from './sections/carousel';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero
                title="La Familia"
                description="Tex-mex foodtruck med läcker mat"
                image="foodtruckqeue.jpeg"
                cta_text="Kontakta oss"
                cta_redirect="mailto:foodtruck@lafamiliam.se"
            />
            <Catering />
            <FollowBanner />
            <About />
            <ImageCarousel />
            <Contact />
        </div>
    );
}

export default App;
