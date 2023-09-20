import React from 'react';
import { Section } from '../../components/Section';
import { Animation } from '../../components/Animation';
import CarouselCard from '../../components/CarouselCard';

import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function ServicesSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const cards = response.allServicesJson.sections[0].services;
    console.log(cards)
    return (
        <Animation type="fadeUp">
            <Section custuomSection anchor={props.sectionId} heading={props.heading}>
                <div className={classes.carouselSection}>
                    <div className={classes.headerDiv}>
                        <h3 className={classes.Heading}>Los mejores servicios</h3>
                    </div>
                    <div className={classes.carouselComp}>
                        <CarouselCard cards={cards} />
                    </div>
                </div>
            </Section>
        </Animation>
    );
}