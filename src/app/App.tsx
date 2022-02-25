import React from 'react';
import {RootState} from './store'
import {useSelector, useDispatch} from "react-redux";
import {changeType} from './contentSlice';
import Button from '../elements/Button'


function App() {
    const type = useSelector((state: RootState) => state.content.type);
    const dispatch = useDispatch();
    dispatch(changeType(3));

    return (
        <div>
            <h1 className={"heading"}>App</h1>
            <ul>
                <li>{type}</li>
                <li>
                    <Button
                        buttonType='download'
                        className='class-test'
                    >
                        Download .png
                    </Button>
                </li>
            </ul>
        </div>
    );
}

export default App;
