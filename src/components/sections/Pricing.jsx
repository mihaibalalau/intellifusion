'use client';
import Card from 'zanubio/components/containers/Card';
import H2 from 'zanubio/components/typography/H2';
import HollowButton from 'zanubio/components/buttons/HollowButton';
import Icon from 'zanubio/components/Icon';
import P1 from 'zanubio/components/typography/P1';
import Section from 'src/components/containers/Section';

import PricingCard from '../cards/PricingCard';
import style from './Pricing.module.css';

const Pricing = () => {
    return (
        <Section>
            <PricingCard
                name={'Supercharge Your Analytics'}
                pricePerMonth={19}
                features={[]}
            />

            <H2 className={style.title}>

            </H2>

            <P1>
                Lorem ipsum dolor sit amet consectetur. Integer tellus eu scelerisque nunc. Integer ac convallis tempus nibh ac tristique penatibus nulla a.
            </P1>

            <Card>
                <div>
                    Basic Plan
                </div>
                <div>
                    $19/mo
                </div>
                <HollowButton>
                    Try for Free
                    <Icon name={'ArrowCorner'} />
                </HollowButton>
            </Card>
        </Section>
    );
}

export default Pricing;
