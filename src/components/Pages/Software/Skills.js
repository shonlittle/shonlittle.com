/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Paper, Chip, alpha } from '@mui/material';

// Add local dependencies.
import content from '../../../content/software.json';

// Skill categories.
const skillCategories = content.skills;

/**
 * Skills component.
 * @example
 * return (
 *   <Skills />
 * )
 * @returns {React.ReactElement} component.
 */
const Skills = () => {
  // Render component.
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        backgroundColor: theme => alpha(theme.palette.background.paper, 0.5), // Dark background
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="sectionTitle" component="h2">
          Technical Expertise
        </Typography>

        {/* Skills Grid - two wide cards on the first row, three on the second */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // 1 column on mobile
              md: 'repeat(6, 1fr)', // 6 tracks on desktop
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {skillCategories.map((category, index) => (
            <Paper
              key={category.id}
              elevation={0}
              variant="hover"
              sx={{
                gridColumn: { md: index < 2 ? 'span 3' : 'span 2' },
                height: '100%',
                p: 3,
                // Stagger animation delay
                animation: 'fadeInUp 0.6s ease forwards',
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Category Title */}
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  mb: 2,
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'secondary.main', // Cyan color for titles
                }}
              >
                {category.title}
              </Typography>

              {/* Skill Tags */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {category.skills.map(skill => (
                  <Chip key={skill} label={skill} color="primary" variant="skill" size="small" />
                ))}
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Skills;
