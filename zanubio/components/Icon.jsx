import React from 'react';

import ArrowCornerSvg from '../assets/icons/ArrowCorner.svg';
import BurgerMenuSvg from '../assets/icons/BurgerMenu.svg';
import ChartSvg from '../assets/icons/Chart.svg';
import ChartDoubleSvg from '../assets/icons/ChartDouble.svg';
import DataSettingsSvg from '../assets/icons/DataSettings.svg';
import MicrochipSvg from '../assets/icons/Microchip.svg';
import MultiCircleSvg from '../assets/icons/MultiCircle.svg';
import No1 from '../assets/icons/No1.svg';
import No2 from '../assets/icons/No2.svg';
import No3 from '../assets/icons/No3.svg';

const Icon = ({ name, ...props }) => {

    switch (name) {
        case 'ArrowCorner':
            return <ArrowCornerSvg {...props} />;
        case 'BurgerMenu':
            return <BurgerMenuSvg {...props} />;
        case 'Chart':
            return <ChartSvg {...props} />;
        case 'ChartDouble':
            return <ChartDoubleSvg {...props} />;
        case 'DataSettings':
            return <DataSettingsSvg {...props} />;
        case 'Microchip':
            return <MicrochipSvg {...props} />;
        case 'MultiCircle':
            return <MultiCircleSvg {...props} />;
        case 'No1':
            return <No1 {...props} />;
        case 'No2':
            return <No2 {...props} />;
        case 'No3':
            return <No3 {...props} />;
        default:
            throw new Error("Unknown icon " + name);
    }
}

export default Icon;
