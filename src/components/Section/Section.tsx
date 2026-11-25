import type { ReactNode } from 'react';

import { Flex, Heading, Text } from '@olegpolyakov/ui';

import styles from './Section.module.scss';

export default function Section({
    id,
    heading,
    description,
    children
}: {
    id?: string;
    heading?: string;
    description?: string;
    children?: ReactNode;
}) {
    return (
        <Flex
            as="section"
            id={id}
            className={styles.root}
            gap="xl"
            column
        >
            {heading &&
                <Flex
                    as="header"
                    gap="xs"
                    column
                >
                    <Heading
                        as="h2"
                        size="xl"
                        content={heading}
                    />

                    {description &&
                        <Text
                            content={description}
                            color="secondary"
                            size="l"
                        />
                    }
                </Flex>
            }

            {children}
        </Flex>
    );
}
