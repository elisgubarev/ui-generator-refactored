import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import H2Title from '../organisms/H2Title';
import Link from '../molecules/Link';
import Button from '../molecules/Button';
import Testimonial from '../molecules/Testimonial';
import photo from '../../assets/images/photo.png';
import {url} from '../../app/globalData';

type RowProps = {
    className?: string;
}

const Row: FC<RowProps> = (props) => {
    const className = composeClassList('bottom-info-layout__row', props.className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

type Props = {
    className?: string;
}

const BottomInfoLayout: FC<Props> = (props) => {
    const className = composeClassList('bottom-info-layout', props.className);

    return (
        <div className={className}>
            <div className="bottom-info-layout__wrapper">
                <Row>
                    <H2Title>
                        UI Generator was brought to you by <Link href={url.unicorn} target="_blank">Unicorn&nbsp;Platform</Link> 😎
                    </H2Title>
                </Row>
                <Row>
                    <Button
                        buttonType='link'
                        href={url.unicorn}
                        target='_blank'
                    >
                        Try Unicorn Platform for free
                    </Button>
                </Row>
                <Row>
                    <Testimonial
                        name="David A. Chang"
                        info="Co-Founder of Sidewise"
                        photoSrc={photo}
                    >
                        Unicorn Platform is by far the <b>easiest tool</b> I've ever used to launch a landing page.
                    </Testimonial>
                </Row>
            </div>
        </div>
    );
}

export default BottomInfoLayout;