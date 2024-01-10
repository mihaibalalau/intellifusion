'use client';
import H1 from 'zanubio/components/typography/H1';
import Icon from 'zanubio/components/Icon';
import Image from 'zanubio/components/images/Image';
import MainButton from 'zanubio/components/buttons/MainButton';
import P1 from 'zanubio/components/typography/P1';
import SatisfiedCompanies from 'src/components/clients/SatisfiedCompanies';
import Section from 'src/components/containers/Section';

import style from './Hero.module.css';

const Hero = () => {
    return (
        <Section className={style.hero}>
            <Image src='/images/SalesVolumeAnalysis.png' alt={'Sales volume analysis'} />

            <H1 className={style.title}>
                Intelligent Insights for Agile Enterprises
            </H1>

            <P1 className={style.text}>
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.
            </P1>
            <MainButton className={style.button}>
                Start Now <Icon name={'ArrowCorner'} />
            </MainButton>
            <SatisfiedCompanies className={style.testimonials} />
        </Section>
    );
}

export default Hero;
