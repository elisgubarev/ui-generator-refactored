import React from 'react';
import Button from '../components/molecules/Button'
import TypePicker from "../components/molecules/TypePicker";
import CategoryPicker from "../components/molecules/CategoryPicker";
import ColorPicker from '../components/molecules/ColorPicker';
import Toggle from '../components/molecules/Toggle';


function App() {
    return (
        <>
            <div className={"app"}>
                <Button
                    buttonType='download'
                >
                    Download .png
                </Button>
                <Button
                    buttonType='link'
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
                <Toggle label="Dark background" changedValue='dark' />

            </div>
            <br />
            <div className='app'>

                <Toggle label="Mockup" changedValue='mockup' />
            </div>
            <br />

        </>
    );
}

export default App;