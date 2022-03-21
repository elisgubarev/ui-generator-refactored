import Sidebar from '../components/layouts/Sidebar';
import Result from '../components/molecules/Result';
import ResultSection from '../components/organisms/ResultSection';
import H1Title from '../components/organisms/H1Title';
import Testimonial from '../components/molecules/Testimonial';
import photo from '../assets/images/photo.png';
import Footer from '../components/organisms/Footer';
import BottomInfoLayout from '../components/layouts/BottomInfoLayout';


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
                <BottomInfoLayout />
                <Footer />
            </div>
        </div>
    );
}

export default App;