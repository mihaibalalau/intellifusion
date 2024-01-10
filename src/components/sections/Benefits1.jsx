'use client';
import H2 from 'zanubio/components/typography/H2';
import Image from 'zanubio/components/images/Image';
import P1 from 'zanubio/components/typography/P1';
import Section from 'src/components/containers/Section';

import style from './Benefits.module.css';

const Benefits1 = () => {
    return (
        <Section className={style.benefits}>
            <H2 className={style.title}>
                Stay Ahead of Your Competition with Predictive Insights
            </H2>

            <P1>
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.
            </P1>

            <Image src={'/images/buyer-behavior-analysis.png'} alt={'Buyer behavior analysis'}/>
        </Section>
    );
}

export default Benefits1;
