import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import Result from '../molecules/Result';
import Footer from '../organisms/Footer';
import H1Title from '../organisms/H1Title';
import ResultSection from '../organisms/ResultSection';
import BottomInfoLayout from './BottomInfoLayout';
import TypePicker from '../molecules/TypePicker'
import CategoryPicker from '../molecules/CategoryPicker';
import ColorPicker from '../molecules/ColorPicker';
import Toggle from '../molecules/Toggle';
import Share from '../molecules/Share';
import H1 from '../headings/H1';
import Button from '../molecules/Button';

type RowProps = {
    className?: string;
}

const Row: FC<RowProps> = (props) => {
    const className = composeClassList('main-layout__row', props.className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

type Props = {
    className?: string;
}

const MainLayout: FC<Props> = (props) => {
    const className = composeClassList('main-layout', props.className);

    return (
        <div className={className}>
            <div className="main-layout__wrapper">
                <Button className="mobile-only" buttonType='download' fab>Download .png</Button>
                <Row className="mobile-only">
                    <H1Title noTip>
                        Generate and Download Mockup UI
                    </H1Title>
                </Row>
                <Row className="mobile-only">
                    <TypePicker />
                </Row>
                <Row className="mobile-only">
                    <CategoryPicker noTip />
                </Row>
                <Row>
                    <ResultSection>
                        <H1Title className="desktop-only" >
                            Generate and Download Mockup UI
                        </H1Title>
                        <Result />
                    </ResultSection>
                </Row>
                <Row className='mobile-only'>
                    <ColorPicker />
                </Row>
                <Row className="mobile-only">
                    <Toggle changedValue="dark">Dark background</Toggle>
                    <Toggle changedValue="mockup">Mockup</Toggle>
                </Row>
                <Row className="main-layout__share mobile-only">
                    <H1>
                        Share with friends
                    </H1>
                    <Share />
                </Row>
                <Row className="main-layout__bottom-info">
                    <BottomInfoLayout />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </div>
        </div>
    );
}

export default MainLayout;