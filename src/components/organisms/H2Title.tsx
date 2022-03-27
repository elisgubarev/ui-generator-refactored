import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H2 from '../headings/H2';

type Props = {
    className?: string;
}

const H2Title: FC<Props> = (props) => {
    const className = composeClassList('h2-title', props.className);

    return (
        <div className={className}>
            <div className="h2-title__wrapper">
                <H2 className="h2-title__h2">{props.children}</H2>
                <div className="h2-title__subtitle">
                    <p>
                        Unicorn Platform is a simple landing page builder. It is a tool for busy startup founders and marketeers.
                    </p>
                    <p>
                        Sign up and join <b>19,853</b> makers.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default H2Title;