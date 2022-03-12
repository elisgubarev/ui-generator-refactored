import { FC } from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { composeClassList } from '../../functions/composeClassList';

type Props = {
    className?: string;
}

const Result: FC<Props> = (props) => {
    const state: any = useSelector((state: RootState) => state.content);

    const generateSrc = () => {
        let src = "";
        Object.keys(state).forEach((key) => {
            src += state[key];
        })
        return `/ui/${src}.png`;
    }

    const className = composeClassList('result', props.className);

    return (
        <div className={className}>
            <div className="result__wrapper">
                <img className='result__image' src={generateSrc()} alt="Generated UI image" />
            </div>
        </div>
    );
}

export default Result;