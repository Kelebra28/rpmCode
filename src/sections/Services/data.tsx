import { graphql, useStaticQuery } from 'gatsby';

interface CardProps {
    title: string;
    content: string;
    icon: string;
}

interface CarouselCard {
    allServicesJson: {
        sections: {
            services: CardProps[];
        }[];
    };
}

export const useLocalDataSource = (): CarouselCard => {
    return useStaticQuery(graphql`

    query ServicesSectionQuery {
        allServicesJson {
            sections: nodes {
                services {
                    title
                    content
                    icon
                }
            }
        }
    }
    `);
};