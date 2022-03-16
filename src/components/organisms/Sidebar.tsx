import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import TypePicker from "../../components/molecules/TypePicker";
import CategoryPicker from "../../components/molecules/CategoryPicker";
import ColorPicker from '../../components/molecules/ColorPicker';
import Toggle from '../../components/molecules/Toggle';
import Logo from '../../components/molecules/Logo';
import SidebarSection from '../../components/organisms/SidebarSection';
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
                    <SidebarSection>
                        <Logo href="/" tagline>UI Generator</Logo>
                    </SidebarSection>
                </Row>
                <Row>
                    <SidebarSection label="UI Type">
                        <TypePicker />
                    </SidebarSection>
                </Row>
                <Row>
                    <SidebarSection label="Category">
                        <CategoryPicker />
                    </SidebarSection>
                </Row>
                <Row>
                    <SidebarSection label="Color">
                        <ColorPicker />
                    </SidebarSection>
                </Row>
                <Row>
                    <SidebarSection label="Appearance">
                        <Toggle changedValue='dark'>Dark background</Toggle>
                        <Toggle changedValue='mockup'>Mockup</Toggle>
                    </SidebarSection>
                </Row>
                <Row>
                    <SidebarSection label="Share with friends">
                        <Share />
                    </SidebarSection>
                </Row>

            </div>
        </div>
    );
}

export default Sidebar;