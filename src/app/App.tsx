import React from 'react';
import Button from '../components/molecules/Button'
import TypePicker from "../components/molecules/TypePicker";
import CategoryPicker from "../components/molecules/CategoryPicker";
import ColorPicker from '../components/molecules/ColorPicker';
import Toggle from '../components/molecules/Toggle';
import Logo from '../components/molecules/Logo';


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
                <Toggle changedValue='dark'>Dark background</Toggle>

            </div>
            <br />
            <div className='app'>

                <Toggle changedValue='mockup'>Mockup</Toggle>
            </div>
            <br />
            <div className='app'>

                <Logo href="https://unicornplatform.com">UI Generator</Logo>
            </div>
            <br />

        </>
    );
}

export default App;