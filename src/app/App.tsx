import React from 'react';
import Button from '../components/molecules/Button'
import TypePicker from "../components/molecules/TypePicker";
import CategoryPicker from "../components/molecules/CategoryPicker";


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