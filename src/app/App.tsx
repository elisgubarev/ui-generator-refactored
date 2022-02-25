import React from 'react';
import Button from '../elements/molecules/Button'
import TypeSwitcher from "../elements/molecules/TypeSwitcher";


function App() {
    return (
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
            <TypeSwitcher />
        </div>
    );
}

export default App;
