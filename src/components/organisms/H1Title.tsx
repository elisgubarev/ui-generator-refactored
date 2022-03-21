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
            <div className="h1-title__wrapper">
                <H1 className="h1-title__h1">{props.children}</H1>
                <div className="h1-title__subtitle">
                    Create mockup (fake) UI for your landing page, prototype, presentation, or blog post. Download free PNG files.
                </div>
            </div>
        </div>
    );
}

export default H1Title;