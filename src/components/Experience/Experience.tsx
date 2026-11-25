import { Flex, Heading, Link, Text } from '@olegpolyakov/ui';

import Section from '@/components/Section';
import { experience } from '@/data/profile';

import styles from './Experience.module.scss';

export default function Experience() {
    return (
        <Section
            id="experience"
            heading="Experience"
            description="10+ years as a founding engineer and in cross-functional product teams."
        >
            <ol className={styles.timeline}>
                {experience.map(job => (
                    <li
                        key={`${job.company}-${job.period}`}
                        className={styles.item}
                    >
                        <Text
                            className={styles.period}
                            content={job.period}
                            color="tertiary"
                            size="s"
                            weight="semibold"
                        />

                        <Flex
                            gap="xs"
                            column
                        >
                            <Heading
                                as="h3"
                                size="m"
                                content={
                                    <>
                                        {job.role} at{' '}
                                        {job.url ?
                                            <Link
                                                href={job.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                content={job.company}
                                                color="brand"
                                                inline
                                            />
                                            :
                                            job.company
                                        }
                                    </>
                                }
                            />

                            <Text
                                content={job.summary}
                                color="secondary"
                            />
                        </Flex>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
