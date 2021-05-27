import { useState } from "react";

export const LiCurrent = ({currentDeal}) => {
  
    const [checked, setChecked] = useState(false);

    const onClickCheckbox = () => {
        setChecked(!checked);
        // ?
        currentDeal.checked = !checked;
    }

    return (
        <li> <input  type="checkbox" checked={checked} onChange={onClickCheckbox}/>{currentDeal.item}</li>
    )
}