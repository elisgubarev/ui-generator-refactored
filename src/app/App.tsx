import React from 'react';
import Button from '../elements/molecules/Button'
import TypePicker from "../elements/molecules/TypePicker";
import CategoryPicker from "../elements/molecules/CategoryPicker";


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
                <TypePicker/>
            </div>
            <br/>
            <div className={"app"}>
                <CategoryPicker/>
            </div>

        </>
    );
}

export default App;