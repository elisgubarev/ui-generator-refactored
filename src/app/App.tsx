import Sidebar from '../components/organisms/Sidebar';
import Result from '../components/molecules/Result';
import ResultSection from '../components/organisms/ResultSection';
import H1Title from '../components/organisms/H1Title';
import Testimonial from '../components/molecules/Testimonial';
import photo from '../assets/images/photo.png';


function App() {
    return (
        <div className="dev-app">
            <Sidebar />
            <div className="dev-main">
                <ResultSection>
                    <H1Title heading="Generate and Download Mockup UI" />
                    <Result />
                </ResultSection>
                <Testimonial
                    name="David A. Chang"
                    info="Co-Founder of Sidewise"
                    photoSrc={photo}
                >
                    Unicorn Platform is by far the <b>easiest tool</b> I've ever used to launch a landing page.
                </Testimonial>
            </div>
        </div>
    );
}

export default App;