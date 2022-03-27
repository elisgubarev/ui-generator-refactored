import Sidebar from '../components/layouts/Sidebar';
import MainLayout from '../components/layouts/MainLayout';
import ReactTooltip from 'react-tooltip';

function App() {
    return (
        <>
            <ReactTooltip
                place="top"
                type="dark"
                effect="solid"
            />
            <Sidebar />
            <MainLayout />
        </>
    );
}

export default App;