import React, { useState } from 'react';

import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import { PiDevices } from 'react-icons/pi'
import { MdDeveloperMode } from 'react-icons/md'
import { FaConnectdevelop, FaDev } from 'react-icons/fa'
import { RiCodeView } from 'react-icons/ri'
import * as classes from './style.module.css';

const MAX_VISIBILITY = 3;

interface CardProps {
    title: string;
    content: string;
    icon: string;
}

const Card = ({ icon, title, content }) => {
    let selectedIcon;

    switch (icon) {
        case 'web':
            selectedIcon = <PiDevices />;
            break;
        case 'mobile':
            selectedIcon = <MdDeveloperMode />;
            break;
        case 'dev':
            selectedIcon = <FaDev />;
            break;
        case 'other':
            selectedIcon = <FaConnectdevelop />;
            break;
        default:
            selectedIcon = <RiCodeView />;
    }
    return (
        <div className={classes.card}>
            <div className={classes.cardIconContainer}>
                <div className={classes.cardIconBackground}>
                    {selectedIcon}
                </div>
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
            <div className={classes.cardImages}></div>
        </div>
    );
};


const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
        <div className={classes.carousel}>
            {active > 0 && (
                <button className={classes.navLeft} onClick={() => setActive(i => i - 1)}>
                    <TiChevronLeftOutline />
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className={classes.cardContainer}
                    style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        // @ts-ignore: Ignore type checking for custom properties
                        'pointer-events': active === i ? 'auto' : 'none',
                        opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    } as any}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className={classes.navRight} onClick={() => setActive(i => i + 1)}>
                    <TiChevronRightOutline />
                </button>
            )}
        </div>
    );
};




const CarouselCard: React.FC<{ cards: CardProps[] }> = ({ cards }) => (
    <>
        <Carousel>
            {cards.map((card, i) => (
                <Card key={i} title={card.title} content={card.content} icon={card.icon} />
            ))}
        </Carousel>
    </>
);

export default CarouselCard;