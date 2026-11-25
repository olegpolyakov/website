import { Button, ButtonGroup, type ButtonProps } from '@olegpolyakov/ui';

import GitHubIcon from '@/assets/github.svg';
import LinkedInIcon from '@/assets/linkedin.svg';
import TelegramIcon from '@/assets/telegram.svg';
import { type Contact, contacts } from '@/data/profile';

const icons: Record<Contact['name'], ButtonProps['icon']> = {
    email: { name: 'email', filled: true, size: 'm' },
    github: <GitHubIcon />,
    linkedin: <LinkedInIcon />,
    telegram: <TelegramIcon />
};

export default function SocialLinks({
    size
}: {
    size?: ButtonProps['size'];
}) {
    return (
        <ButtonGroup
            size={size}
            gap="s"
        >
            {contacts.map(contact => (
                <Button
                    key={contact.name}
                    as="a"
                    href={contact.href}
                    target={contact.name === 'email' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    icon={icons[contact.name]}
                    title={contact.label}
                    aria-label={contact.label}
                />
            ))}
        </ButtonGroup>
    );
}
