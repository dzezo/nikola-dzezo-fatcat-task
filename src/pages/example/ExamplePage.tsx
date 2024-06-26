import {
    PageConfig,
    PageGenerator,
} from '@homework-task/features/pageGenerator/PageGenerator';

export const ExamplePage = () => {
    return <PageGenerator pageConfig={pageConfig} />;
};

const pageConfig: PageConfig = [
    {
        type: 'layoutSection',
        props: {
            background: 'bg-yellow',
        },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Hero component',
                    image: '/media/landing/hero.svg',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: {
            background: 'bg-white',
        },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description: 'Lorem ipsum sit dolor amet',
                        },
                        {
                            title: 'Item 2',
                            description: 'Lorem ipsum sit dolor amet',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/landing/hero.svg',
                        '/media/landing/hero.svg',
                    ],
                },
            },
        ],
    },
];
