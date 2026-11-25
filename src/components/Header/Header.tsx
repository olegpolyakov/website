import { Flex, Link } from '@olegpolyakov/ui';

import Logo from '@/assets/logo.svg';
import SocialLinks from '@/components/SocialLinks';
import { profile } from '@/data/profile';

import styles from './Header.module.scss';

const nav = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
];

export default function Header() {
    return (
        <header className={styles.root}>
            <div className={styles.inner}>
                <a
                    className={styles.home}
                    href="#top"
                    aria-label={`${profile.name} — home`}
                >
                    <Logo className={styles.logo} />
                </a>

                <Flex
                    as="nav"
                    className={styles.nav}
                    gap="l"
                    align="center"
                >
                    {nav.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            content={item.label}
                            color="secondary"
                            weight="semibold"
                        />
                    ))}
                </Flex>

                <SocialLinks size="s" />
            </div>
        </header>
    );
}
