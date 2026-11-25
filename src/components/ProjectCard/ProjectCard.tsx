import { Button, ButtonGroup, Card, Flex, Heading, Image, List, Pill, Text } from '@olegpolyakov/ui';

import type { Project } from '@/data/projects';

import styles from './ProjectCard.module.scss';

export default function ProjectCard({
    project,
    featured = false
}: {
    project: Project;
    featured?: boolean;
}) {
    const { live, code } = project.links ?? {};

    return (
        <Card
            as="article"
            className={styles.root}
            shape="rounded-l"
            shadowHover="m"
        >
            {featured && project.image &&
                <Image
                    className={styles.image}
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    shape="rounded-m"
                />
            }

            <Heading
                className={styles.name}
                as="h3"
                content={project.name}
                size={featured ? 'l' : 'm'}
                end={
                    <Pill
                        content={project.type}
                        color="brand"
                        variant="tinted"
                        size="s"
                    />
                }
                gap="s"
            />

            <Text
                content={project.summary}
                color="secondary"
            />

            {featured && project.highlights.length > 0 &&
                <List
                    className={styles.highlights}
                    items={project.highlights.map(highlight => ({
                        key: highlight,
                        icon: 'check',
                        content: highlight
                    }))}
                    size="s"
                />
            }

            <Flex
                className={styles.footer}
                gap="m"
                column
            >
                <Flex
                    gap="xs"
                    wrap
                >
                    {project.stack.map(tech => (
                        <Pill
                            key={tech}
                            content={tech}
                            variant="outlined"
                            size="s"
                        />
                    ))}
                </Flex>

                {(live || code) &&
                    <ButtonGroup gap="s">
                        {live &&
                            <Button
                                as="a"
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                content="Live"
                                endIcon="open_in_new"
                                color="brand"
                                variant="tinted"
                                size="s"
                            />
                        }

                        {code &&
                            <Button
                                as="a"
                                href={code}
                                target="_blank"
                                rel="noopener noreferrer"
                                content="Code"
                                endIcon="code"
                                variant="outlined"
                                size="s"
                            />
                        }
                    </ButtonGroup>
                }
            </Flex>
        </Card>
    );
}
