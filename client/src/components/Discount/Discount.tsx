'use client';

import { useState } from 'react';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import Dropdown from './Dropdown';

import css from './Discount.module.css';

const data = {
    title: 'Select you discount settings',
    description: 'These default settings are leveraged from practitioners for optimal patient adherence, you can edit these at any time.',
    loyalty: {
        title: 'Dispensary discount :',
        default: 10,
        discounts: new Map([
            [
                10,
                [
                    'Applied to all patient orders (labs excluded).',
                    '50% of practitioners offer a 10% dispensary discount.',
                    'Helps make high-quality supplements more affordable for patients.',
                ],
            ],
            [
                15,
                [
                    'Applied to all patient orders (labs excluded).',
                    '50% of practitioners offer a 10% dispensary discount.',
                ],
            ],
            [
                25,
                [],
            ],
        ]),
    },
    soon: {
        title: 'Auto refills discount : Coming soon',
        conditions: [
            'This additional discount is applied to all auto refill orders',
            'Patients offered this discount are twice as likely to set up auto refills',
            'Offering this discount increases the number of ordering patients by 16%',
        ],
    },
};

export default function Discount () {
    const [value, setValue] = useState(data.loyalty.default);

    return (
        <Container className={css.container}>
            <h1 className={css.title}>1 | {data.title}</h1>

            <div className={css.description}>{data.description}</div>

            <Container className={css.innerContainer}>
                <div className={css.title}>
                    <h1>{data.loyalty.title}</h1>
                    <Dropdown
                        value={value}
                        values={[...data.loyalty.discounts.keys()]}
                        onChange={(value) => {
                            setValue(value);
                        }}
                    />
                </div>

                {data.loyalty.discounts.has(value) && (
                    <ul>
                        {data.loyalty.discounts.get(value)!.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </ul>
                )}
            </Container>

            <Container className={css.innerContainer}>
                <h1 className={css.title}>{data.soon.title}</h1>

                <ul>
                    {data.soon.conditions.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </Container>

            <Button
                className={css.btn}
                text='Confirm'
                onClick={() => {
                    alert(`Selected: ${value}%`);
                }}
            />
        </Container>
    )
}
