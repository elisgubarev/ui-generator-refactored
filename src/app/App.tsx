import React from 'react';
import Button from '../components/molecules/Button'
import TypePicker from "../components/molecules/TypePicker";
import CategoryPicker from "../components/molecules/CategoryPicker";
import ColorPicker from '../components/molecules/ColorPicker';
import Toggle from '../components/molecules/Toggle';
import Logo from '../components/molecules/Logo';
import Section from '../components/molecules/Section';


function App() {
    return (
        <div className="dev-sidebar">
            <Section label="UI Type">
                <TypePicker />
            </Section>

            <Section label="Category">
                <CategoryPicker />
            </Section>

            <Section label="Color">
                <ColorPicker />
            </Section>

            <Section label="Appearance">
                <Toggle changedValue='dark'>Dark background</Toggle>
                <Toggle changedValue='mockup'>Mockup</Toggle>
            </Section>


        </div>
    );
}

export default App;