/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2026-11-12
 */

// Add third-party dependencies.
import { Box, Container, Typography, Card, CardContent, Chip, Stack } from '@mui/material';

// Add local dependencies.
import laurelsAimf from '../../../assets/images/laurels-aimf.png';
import laurelsPixelMinds from '../../../assets/images/laurels-pixel-minds.png';
import laurelsScff from '../../../assets/images/laurels-scff.png';
import laurelsTziff from '../../../assets/images/laurels-tziff.png';
import content from '../../../content/software.json';

// Laurel images, keyed by the `id` field in the content file.
const laurelImages = { tziff: laurelsTziff, aimf: laurelsAimf, pixelMinds: laurelsPixelMinds, scff: laurelsScff };

// Creative content.
const { creative } = content;
const { film } = creative;

/**
 * Creative component - AI side projects outside of enterprise software.
 * @example
 * return (
 *   <Creative />
 * )
 * @returns {React.ReactElement} component.
 */
const Creative = () => {
  // Render component.
  return (
    <Box
      component="section"
      id="creative"
      sx={{
        py: { xs: 8, md: 10 },
        px: 2,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography variant="sectionTitle" component="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, mb: 2 }}>
          {creative.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: 'center', color: 'text.secondary', maxWidth: '720px', mx: 'auto', mb: { xs: 4, md: 6 } }}
        >
          {creative.intro}
        </Typography>

        {/* Director.exe */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            mb: 2,
            textAlign: 'center',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {film.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {film.description}
        </Typography>

        {/* Festival Laurels */}
        <Stack
          component="ul"
          aria-label="Festival recognition"
          direction="row"
          spacing={0}
          justifyContent="center"
          alignItems="flex-start"
          sx={{ mb: 4, listStyle: 'none', flexWrap: 'wrap', gap: { xs: 2, sm: 4 } }}
        >
          {film.laurels.map(laurel => (
            <Box component="li" key={laurel.id} sx={{ textAlign: 'center', width: { xs: 130, sm: 160 } }}>
              <Box
                component="img"
                src={laurelImages[laurel.id]}
                alt={laurel.alt}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                sx={{ width: '100%', height: 'auto', mb: 1, display: 'block' }}
              />
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', fontSize: '0.8rem' }}>
                {laurel.lines.map(line => (
                  <Box component="span" key={line} sx={{ display: 'block' }}>
                    {line}
                  </Box>
                ))}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* Videos */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 3, md: 4 },
            mb: 4,
          }}
        >
          {film.videos.map(video => (
            <Card key={video.id} elevation={0} variant="hover" sx={{ overflow: 'hidden' }}>
              <Box
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="iframe"
                  src={video.src}
                  title={video.iframeTitle}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.caption}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* AI tools used for this project */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            AI Tools Used:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {film.tools.map(tool => (
              <Chip
                key={tool}
                label={tool}
                color="primary"
                variant="outlined"
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Export component.
export default Creative;
