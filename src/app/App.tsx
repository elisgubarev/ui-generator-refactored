import Sidebar from '../components/organisms/Sidebar';
import Result from '../components/molecules/Result';


function App() {
    return (
        <div className="dev-app">
            <Sidebar />
            <div className="dev-main">
                <Result />
            </div>
        </div>
    );
}

export default App;