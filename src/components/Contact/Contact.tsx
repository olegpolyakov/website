import { Button, Card, Flex, Heading, Text } from '@olegpolyakov/ui';

import Section from '@/components/Section';
import SocialLinks from '@/components/SocialLinks';
import { contacts } from '@/data/profile';

import styles from './Contact.module.scss';

export default function Contact() {
    const email = contacts.find(contact => contact.name === 'email');

    return (
        <Section id="contact">
            <Card
                className={styles.card}
                color="brand"
                shape="rounded-xl"
            >
                <Flex
                    gap="m"
                    align="center"
                    column
                >
                    <Heading
                        as="h2"
                        className={styles.title}
                        content="Let's build something together"
                        align="center"
                        weight="bold"
                    />

                    <Text
                        className={styles.text}
                        content="Open to full-stack and front-end roles, freelance projects, and conversations about AI-powered products."
                        align="center"
                        size="l"
                    />

                    {email &&
                        <Button
                            as="a"
                            href={email.href}
                            content="Email me"
                            startIcon={{ name: 'email', filled: true }}
                            color="brand"
                            variant="filled"
                            size="l"
                        />
                    }

                    <SocialLinks />
                </Flex>
            </Card>

            
        </Section>
    );
}
