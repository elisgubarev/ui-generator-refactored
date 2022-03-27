import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import TypePicker from "../molecules/TypePicker";
import CategoryPicker from "../molecules/CategoryPicker";
import ColorPicker from '../molecules/ColorPicker';
import Toggle from '../molecules/Toggle';
import Logo from '../molecules/Logo';
import H3Title from '../organisms/H3Title';
import Share from '../molecules/Share';
import DownloadDesktop from '../organisms/DownloadDesktop';

type RowProps = {
    className?: string;
}

const Row: FC<RowProps> = (props) => {
    const className = composeClassList('sidebar__row', props.className);
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

type Props = {
    className?: string;
}

const Sidebar: FC<Props> = (props) => {
    const className = composeClassList('sidebar', props.className);
    return (
        <div className={className}>
            <div className="sidebar__wrapper">
                <DownloadDesktop />
                <Row className="sidebar__row_logo">
                    <H3Title>
                        <Logo href={process.env.PUBLIC_URL} tagline>UI Generator</Logo>
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="UI Type">
                        <TypePicker />
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="Category" showCategoryName>
                        <CategoryPicker />
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="Color">
                        <ColorPicker />
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="Appearance">
                        <Toggle changedValue='dark'>Dark background</Toggle>
                        <Toggle changedValue='mockup'>Mockup</Toggle>
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="Share with friends">
                        <Share />
                    </H3Title>
                </Row>

            </div>
        </div>
    );
}

export default Sidebar;