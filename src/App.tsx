import Navbar from './sections/navbar';
import About from './sections/about';
import Catering from './sections/catering';
import FollowBanner from './sections/followbanner';
import Hero from './sections/hero';
import Contact from './sections/contact';
import ImageCarousel from './sections/carousel';
import Menu from './sections/menu';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero
                title="La Familia"
                description="Tex-mex foodtruck med läcker mat"
                image="foodtruckqeue.jpeg"
                ctas={
                    [
                        {
                            text: "Meny",
                            href: "#menu-section",
                        },
                        {
                            text: "Kontakta oss",
                            href: "mailto:foodtruck@lafamiliam.se"
                        },
                    ]
                }
            />
            <Menu />
            <FollowBanner />
            <Catering />
            <hr className="w-full my-8 border-palette-4" />
            <About />
            <ImageCarousel />
            <Contact />
        </div>
    );
}

export default App;
