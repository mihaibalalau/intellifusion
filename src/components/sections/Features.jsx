'use client';
import IconCard from 'src/components/cards/IconCard';
import Section from 'src/components/containers/Section';
import Icon from 'zanubio/components/Icon';
import H2 from 'zanubio/components/typography/H2';

import style from './Features.module.css';

const Features = () => {
    return (
        <Section className={style.features} id="features">
            <H2 className={style.title}>
                Everything You Need to Scale
            </H2>

            <IconCard
                icon={<Icon name='Chart' />}
                h3={'Insightful Analytics'}
            >
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.

            </IconCard>

            <IconCard
                icon={<Icon name='Microchip' />}
                h3={'Automate Tasks'}
            >
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.

            </IconCard>


            <IconCard
                icon={<Icon name='DataSettings' />}
                h3={'Data-Backed Strategies'}
            >
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.
            </IconCard>

        </Section>
    );
}

export default Features;
