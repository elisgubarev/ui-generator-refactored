import { FC, useState} from 'react';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const Result: FC<Props> = (props) => {
    const state: any = useSelector((state: RootState) => state.content);
    const dispatch = useDispatch();
    const className = composeClassList('result', props.className);

    const generateSrc = () => {
        let src = "";
        Object.keys(state).forEach((key) => {
            src += state[key];
        })
        return `${process.env.PUBLIC_URL}/ui/${src}.png`;
    }

    const hasShadow = () => {
        return (state.mockup === 0);
    }
    const [shadow, setShadow] = useState(hasShadow());

    const handleOnLoad = () => {
        setShadow(hasShadow());
    }

    return (
        <div className={className}>
            <div className="result__wrapper">
                <img
                    className={`result__image ${shadow ? "result__image_shadow" : ""}`}
                    src={generateSrc()}
                    alt="Generated UI image"
                    onLoad={handleOnLoad}
                />
            </div>
        </div>
    );
}

export default Result;