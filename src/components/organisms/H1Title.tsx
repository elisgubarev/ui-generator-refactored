import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H1 from '../../components/headings/H1';

type Props = {
    className?: string;
}

const H1Title: FC<Props> = (props) => {
    const className = composeClassList('h1-title', props.className);
    return (
        <div className={className}>
            <H1 className="h1-title__h1">Generate and Download Mockup UI</H1>
        </div>
    );
}

export default H1Title;