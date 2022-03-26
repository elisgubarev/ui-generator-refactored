import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import Result from '../molecules/Result';
import Footer from '../organisms/Footer';
import H1Title from '../organisms/H1Title';
import ResultSection from '../organisms/ResultSection';
import BottomInfoLayout from './BottomInfoLayout';

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
                <Row>
                    <ResultSection>
                        <H1Title>
                            Generate and Download Mockup UI
                        </H1Title>
                        <Result />
                    </ResultSection>
                </Row>
                <Row>
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