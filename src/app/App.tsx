import React from 'react';
import {RootState} from './store'
import {useSelector, useDispatch} from "react-redux";
import {changeType} from './contentSlice';

function App() {
    const type = useSelector((state: RootState) => state.content.type);
    const dispatch = useDispatch();
    dispatch(changeType(3));

    return (
        <div>
            <h1 className={"heading"}>App</h1>
            <ul>
                <li>{type}</li>
            </ul>
        </div>
    );
}

export default App;
