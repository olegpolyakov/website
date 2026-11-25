import { Grid, Heading } from '@olegpolyakov/ui';

import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import type { Project } from '@/data/projects';

import styles from './Projects.module.scss';

export default function Projects({ projects }: { projects: Project[] }) {
    const featured = projects.filter(project => project.featured);
    const other = projects.filter(project => !project.featured);

    return (
        <Section
            id="projects"
            heading="Projects"
            description="Full-stack products, libraries, and services I've designed and built end to end."
        >
            <Grid>
                {featured.map(project => (
                    <Grid.Item
                        key={project.slug}
                        phone="12"
                        tablet="12"
                        desktop="6"
                    >
                        <ProjectCard
                            project={project}
                            featured
                        />
                    </Grid.Item>
                ))}
            </Grid>

            {other.length > 0 &&
                <div className={styles.more}>
                    <Heading
                        as="h3"
                        content="More projects"
                        size="l"
                        marginBottom
                    />

                    <Grid>
                        {other.map(project => (
                            <Grid.Item
                                key={project.slug}
                                phone="12"
                                tablet="6"
                                desktop="4"
                            >
                                <ProjectCard project={project} />
                            </Grid.Item>
                        ))}
                    </Grid>
                </div>
            }
        </Section>
    );
}
