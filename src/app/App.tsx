import Sidebar from '../components/organisms/Sidebar';
import Result from '../components/molecules/Result';
import ResultSection from '../components/organisms/ResultSection';
import H1Title from '../components/organisms/H1Title';
import Testimonial from '../components/molecules/Testimonial';
import photo from '../assets/images/photo.png';
import Footer from '../components/organisms/Footer';
import H2Title from '../components/organisms/H2Title';
import Link from '../components/molecules/Link';


function App() {
    return (
        <div className="dev-app">
            <Sidebar />
            <div className="dev-main">
                <ResultSection>
                    <H1Title>
                        Generate and Download Mockup UI
                    </H1Title>
                    <Result />
                </ResultSection>
                <Testimonial
                    name="David A. Chang"
                    info="Co-Founder of Sidewise"
                    photoSrc={photo}
                >
                    Unicorn Platform is by far the <b>easiest tool</b> I've ever used to launch a landing page.
                </Testimonial>
                <H2Title >
                    UI Generator was brought to you by <Link href="https://unicornplatform.com" target="_blank">Unicorn Platform</Link> 😎
                </H2Title>
                <Footer />
            </div>
        </div>
    );
}

export default App;