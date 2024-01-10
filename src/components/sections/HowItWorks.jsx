'use client';
import IconCard from 'src/components/cards/IconCard';
import Section from 'src/components/containers/Section';
import Icon from 'zanubio/components/Icon';
import H2 from 'zanubio/components/typography/H2';

import style from './HowItWorks.module.css';

const HowItWorks = () => {
    return (
        <Section>
            <H2 className={style.title}>
                Turn Data into Decisions
            </H2>


            <IconCard
                icon={<Icon name='No1' />}
                h3={'Gather Data'}
            >
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.

            </IconCard>

            <IconCard
                icon={<Icon name='No2' />}
                h3={'Predict Outcomes'}
            >
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.

            </IconCard>

            <IconCard
                icon={<Icon name='No3' />}
                h3={'Take Action'}
            >
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.

            </IconCard>
        </Section>
    );
}

export default HowItWorks;
