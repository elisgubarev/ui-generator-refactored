import Sidebar from '../components/organisms/Sidebar';
import Result from '../components/molecules/Result';
import ResultSection from '../components/organisms/ResultSection';
import H1 from '../components/headings/H1';


function App() {
    return (
        <div className="dev-app">
            <Sidebar />
            <div className="dev-main">
                <ResultSection>
                    <H1>Generate and Download Mockup UI</H1>
                    <Result />
                </ResultSection>
            </div>
        </div>
    );
}

export default App;