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
        Software engineering leader with over 20+ years in tech, specializing in
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
            <Typography variant="h6">Major U.S. telecom provider</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              DEEP.AI Buddy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              I led the implementation of DEEP.AI (a modular, GenAI-powered
              customer management platform from BCG-X) at one of the largest
              telecoms in the U.S. The rollout enhanced our upselling, reduced
              churn, and gave real-time insights that transformed both digital
              and in-person customer interactions.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontStyle="italic"
            >
              Note: Proprietary code is not publicly available due to client
              confidentiality.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">A mid-sized B2B company</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              DEEP.AI Buddy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Directed the deployment of DEEP.AI for a mid-sized B2B firm. The
              sales team used it to power real-time recommendations, optimize
              pricing, and drive personalized campaigns. The rollout transformed
              their customer engagement strategy and directly impacted
              acquisition, retention, and cross-sell growth.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontStyle="italic"
            >
              Note: Proprietary code is not publicly available due to client
              confidentiality.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Industrial energy company</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              API
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              I led development of a mission-critical pricing API for an
              industrial energy client. The system integrated with Oracle and
              Vendavo to provide real-time pricing guidance to sales reps
              quoting highly configurable products. We designed for high
              availability, input validation, and low latency to ensure
              reliability. The solution streamlined quoting, improved accuracy,
              and gave our client better control over pricing strategy.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontStyle="italic"
            >
              Note: Proprietary code is not publicly available due to client
              confidentiality.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">
              A major multinational agribusiness
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              MFG.AI
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Partnered with a global agribusiness to digitize food safety and
              compliance processes by building a suite of six factory-floor
              applications. We replaced paper-based inspections with
              rugged-tablet workflows, added AI to forecast labor turnout and
              detect defects via cameras, and upgraded factory Wi-Fi to support
              real-time data entry. This led to fewer compliance issues, faster
              inspections, and increased operational efficiency.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontStyle="italic"
            >
              Note: Proprietary code is not publicly available due to client
              confidentiality.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Salt manufacturing company</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Factory of the Future
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Modernized operations at a legacy salt manufacturing company using
              Factory of the Future AI tooling. Introduced predictive
              maintenance and visual quality inspection systems, reducing
              equipment downtime and defect rates.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontStyle="italic"
            >
              Note: Proprietary code is not publicly available due to client
              confidentiality.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" disabled>
              View on GitHub
            </Button>
          </CardActions>
        </Card>

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
          "TypeScript",
          "React.js",
          "Angular",
          "D3.js",
          "Node",
          "Express",
          "Redux",
          "GO",
          "jQuery",
          "Python",
          "Django REST Framework",
          "FastAPI",
          "Flask",
          "Java",
          "Spring Boot",
          "GraphQL",
          "PHP",
          ".NET",
          "C#",
          "VB |VSTO",
          "ASP",
          "VBA",
          "HTML",
          "CSS",
          "Material Design",
          "Material UI",
          "Bootstrap",
          "Sass",
          "LESS",
          "PostgreSQL",
          "MongoDB",
          "Microsoft SQL Server",
          "MySQL",
          "SQLite",
          "Neo4j",
          "RedShift",
          "Microsoft Access",
          "AWS",
          "GCP",
          "Azure",
          "Docker",
          "Docker Compose",
          "Kubernetes",
          "git",
          "GitHub",
          "GitHub Actions",
          "CircleCI",
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
        "Shon combines deep technical insight with calm, confidence-building
        leadership." — Former colleague
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
