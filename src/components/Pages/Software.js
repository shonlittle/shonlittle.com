/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-11
 */

// Add third-party dependencies.
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  Card,
  CardContent,
  CardActions,
  Link as MuiLink,
} from "@mui/material";

/**
 * Software component.
 * @example
 * return (
 *   <Software />
 * )
 * @returns {React.ReactElement} component.
 */
const Software = ({ title }) => {
  // Render component.
  return (
    <Box sx={{ p: 4, maxWidth: "1000px", mx: "auto" }}>
      <Typography variant="h3" gutterBottom>
        Hi, I'm Shon Little
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Software engineering leader with over 30 years in tech, specializing in
        people-first team building, scalable architecture, and making legacy
        systems suck less.
      </Typography>

      {/* CTA Buttons */}
      <Stack direction="row" spacing={2} sx={{ mb: 5 }}>
        <Button
          variant="contained"
          component={MuiLink}
          href="/pdf/shon-little-resume-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 View Résumé
        </Button>
        <Button
          variant="outlined"
          component={MuiLink}
          href="https://linkedin.com/in/shonlittle"
          target="_blank"
          rel="noopener noreferrer"
        >
          🔗 LinkedIn Profile
        </Button>
      </Stack>

      {/* Featured Projects */}
      <Typography variant="h5" gutterBottom>
        Featured Projects
      </Typography>

      <Stack spacing={2} sx={{ mb: 5 }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Dance Studio Scheduler</Typography>
            <Typography variant="body2" color="text.secondary">
              A Python-based system to optimize scheduling and room use at a
              performing arts center.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" target="_blank" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">AI Assistant Integration Demo</Typography>
            <Typography variant="body2" color="text.secondary">
              A React-based prototype using OpenAI APIs to assist BCG teams with
              documentation and code reviews.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" target="_blank" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>
      </Stack>

      {/* Skills */}
      <Typography variant="h5" gutterBottom>
        Core Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 5 }}>
        {[
          "JavaScript",
          "Python",
          "React",
          "Material UI",
          "Redux",
          "Django",
          "Spring",
          "Node.js",
          "GitHub Actions",
          "Docker",
          "Agile Coaching",
          "Team Leadership",
        ].map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </Stack>

      {/* Quote */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontStyle: "italic" }}
      >
        “Shon combines deep technical insight with calm, confidence-building
        leadership.” — Former colleague
      </Typography>
    </Box>
  );
};

// Set component property types.
Software.propTypes = {
  title: PropTypes.string,
};

// Set component default properties.
Software.defaultProps = {
  title: "Software",
};

// Export component.
export default Software;
