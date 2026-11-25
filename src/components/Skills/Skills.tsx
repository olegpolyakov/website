import { Flex, Grid, Heading, Pill } from '@olegpolyakov/ui';

import Section from '@/components/Section';
import { skills } from '@/data/profile';

export default function Skills() {
    return (
        <Section
            id="skills"
            heading="Skills"
            description="The tools I reach for across the stack."
        >
            <Grid>
                {skills.map(skill => (
                    <Grid.Item
                        key={skill.group}
                        phone="12"
                        tablet="6"
                        desktop="4"
                    >
                        <Heading
                            as="h3"
                            content={skill.group}
                            color="secondary"
                            size="s"
                            uppercase
                            marginBottom
                        />

                        <Flex
                            gap="xs"
                            wrap
                        >
                            {skill.items.map(item => (
                                <Pill
                                    key={item}
                                    content={item}
                                    variant="tinted"
                                />
                            ))}
                        </Flex>
                    </Grid.Item>
                ))}
            </Grid>
        </Section>
    );
}
