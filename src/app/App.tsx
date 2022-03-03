import React from 'react';
import Button from '../components/molecules/Button'
import TypePicker from "../components/molecules/TypePicker";
import CategoryPicker from "../components/molecules/CategoryPicker";
import ColorPicker from '../components/molecules/ColorPicker';
import DarkPicker from '../components/molecules/DarkPicker';


function App() {
    return (
        <>
            <div className={"app"}>
                <Button
                    buttonType='download'
                    className='class-test'
                >
                    Download .png
                </Button>
                <Button
                    buttonType='link'
                    className='class-test'
                >
                    Try it for free
                </Button>
                <TypePicker />
            </div>
            <br />
            <div className={"app"}>
                <CategoryPicker />
            </div>
            <br />
            <div className='app'>
                <ColorPicker />
            </div>
            <br />
            <div className='app'>
                <DarkPicker />
            </div>
            <br />

        </>
    );
}

export default App;