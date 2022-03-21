import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import TypePicker from "../../components/molecules/TypePicker";
import CategoryPicker from "../../components/molecules/CategoryPicker";
import ColorPicker from '../../components/molecules/ColorPicker';
import Toggle from '../../components/molecules/Toggle';
import Logo from '../../components/molecules/Logo';
import H3Title from './H3Title';
import Share from '../../components/molecules/Share';
import SidebarDownload from './SidebarDownload';

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
                <SidebarDownload />
                <Row className="sidebar__row_logo">
                    <H3Title>
                        <Logo href="/" tagline>UI Generator</Logo>
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="UI Type">
                        <TypePicker />
                    </H3Title>
                </Row>
                <Row>
                    <H3Title label="Category">
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