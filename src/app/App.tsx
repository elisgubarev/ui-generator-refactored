import Sidebar from '../components/organisms/Sidebar';
import Result from '../components/molecules/Result';
import ResultSection from '../components/organisms/ResultSection';


function App() {
    return (
        <div className="dev-app">
            <Sidebar />
            <div className="dev-main">
                <ResultSection>
                    <Result />
                </ResultSection>
            </div>
        </div>
    );
}

export default App;