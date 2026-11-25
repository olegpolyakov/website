import { Button, ButtonGroup, Flex, Heading, Image, Text } from '@olegpolyakov/ui';

import { profile } from '@/data/profile';

import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section
            id="top"
            className={styles.root}
        >
            <Image
                className={styles.photo}
                src="/photo.jpg"
                alt={profile.name}
                shape="circular"
                shadow="m"
            />

            <Flex
                className={styles.content}
                gap="l"
                column
            >
                <Flex
                    gap="xs"
                    column
                >
                    <Text
                        content={`${profile.role} · ${profile.tagline}`}
                        color="brand"
                        weight="semibold"
                        uppercase
                    />

                    <Heading
                        as="h1"
                        className={styles.title}
                        content={`Hi, I'm ${profile.name}.`}
                        weight="bold"
                    />
                </Flex>

                <Text
                    className={styles.summary}
                    content={profile.summary}
                    color="secondary"
                    size="l"
                />

                <ButtonGroup
                    size="m"
                    gap="l"
                    wrap
                >
                    <Button
                        as="a"
                        href="#projects"
                        content="View projects"
                        endIcon="arrow_downward"
                        color="brand"
                        variant="filled"
                    />

                    {profile.resumeUrl &&
                        <Button
                            as="a"
                            href={profile.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            content="Résumé"
                            startIcon="description"
                            variant="outlined"
                        />
                    }

                    <Button
                        as="a"
                        href="#contact"
                        content="Get in touch"
                        variant="text"
                    />
                </ButtonGroup>
            </Flex>
        </section>
    );
}
