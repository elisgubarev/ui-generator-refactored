import React, {FC, useState} from 'react';

type Props = {}

const CategoryPicker: FC<Props> = (props) => {
    // desktop -> mobile
    const categories = [
        ["Dashboard 1", "Sign up"],
        ["Dashboard 2", "Messenger"],
        ["Dashboard 3", "Profile"],
        ["Kanban", "Social feed"],
        ["CRM", "Dashboard"],
        ["Finance", "E-commerce"],
        ["Calendar", "Finance"],
        ["Messenger", "Music app"],
    ];

    const [selected, setSelected] = useState(0);

    return (
        <div>123</div>
    )
}

export default CategoryPicker;