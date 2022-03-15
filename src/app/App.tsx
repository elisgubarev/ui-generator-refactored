import Sidebar from '../components/organisms/Sidebar';
import Result from '../components/molecules/Result';
import ResultSection from '../components/organisms/ResultSection';
import H1 from '../components/headings/H1';
import H1Title from '../components/organisms/H1Title';


function App() {
    return (
        <div className="dev-app">
            <Sidebar />
            <div className="dev-main">
                <ResultSection>
                    <H1Title />
                    <Result />
                </ResultSection>
            </div>
        </div>
    );
}

export default App;