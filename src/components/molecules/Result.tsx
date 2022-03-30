import { FC, useState, useEffect, useRef } from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { composeClassList } from '../../functions/composeClassList';
import { generateSrc } from '../../functions/generateSrc';
import { loading } from '../../functions/loading';

type Props = {
    className?: string;
}

const Result: FC<Props> = (props) => {
    const state = useSelector((state: RootState) => state.content);
    const className = composeClassList('result', props.className);

    const hasShadow = () => {
        return (state.mockup === 0);
    }
    const [shadow, setShadow] = useState(hasShadow());
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            loading.start();
        }
    }, [state]);

    const handleOnLoad = () => {
        loading.finish();
        setShadow(hasShadow());
    }

    return (
        <div className={className}>
            <div className="result__wrapper">
                <img
                    className={`result__image ${shadow ? "result__image_shadow" : ""}`}
                    src={generateSrc(state)}
                    alt="Generated UI image"
                    onLoad={handleOnLoad}
                />
            </div>
        </div>
    );
}

export default Result;