import { FC } from 'react';
import { composeClassList } from '../../functions/composeClassList';
import TypePicker from "../../components/molecules/TypePicker";
import CategoryPicker from "../../components/molecules/CategoryPicker";
import ColorPicker from '../../components/molecules/ColorPicker';
import Toggle from '../../components/molecules/Toggle';
import Logo from '../../components/molecules/Logo';
import Section from '../../components/molecules/Section';
import Share from '../../components/molecules/Share';

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
                <Row className="sidebar__row_logo">
                    <Section>
                        <Logo href="/" tagline>UI Generator</Logo>
                    </Section>
                </Row>
                <Row>
                    <Section label="UI Type">
                        <TypePicker />
                    </Section>
                </Row>
                <Row>
                    <Section label="Category">
                        <CategoryPicker />
                    </Section>
                </Row>
                <Row>
                    <Section label="Color">
                        <ColorPicker />
                    </Section>
                </Row>
                <Row>
                    <Section label="Appearance">
                        <Toggle changedValue='dark'>Dark background</Toggle>
                        <Toggle changedValue='mockup'>Mockup</Toggle>
                    </Section>
                </Row>
                <Row>
                    <Section label="Share with friends">
                        <Share />
                    </Section>
                </Row>
            </div>
        </div>
    );
}

export default Sidebar;