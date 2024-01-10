'use client';
import H2 from 'zanubio/components/typography/H2';
import Icon from 'zanubio/components/Icon';
import Image from 'zanubio/components/images/Image';
import MainButton from 'zanubio/components/buttons/MainButton';
import P1 from 'zanubio/components/typography/P1';
import Section from 'src/components/containers/Section';

import style from './Benefits.module.css';

const Benefits2 = () => {
    return (
        <Section className={style.benefits}>
            <H2 className={style.title}>
                Automate Mundane Tasks With Drag & Drop Platform
            </H2>

            <P1>
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.
            </P1>


            <MainButton className={style.button}>
                Try for Free <Icon name='ArrowCorner' />
            </MainButton>
            <Image src={'/images/task-automation.png'} alt={'Task automation'}/>
        </Section>
    );
}

export default Benefits2;
