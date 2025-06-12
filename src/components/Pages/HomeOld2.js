/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-11
 */

// Add third-party dependencies.
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Chip,
  Card,
  CardContent,
  CardActions,
  Link as MuiLink,
  useTheme,
  useMediaQuery,
  Fade,
} from "@mui/material";

/**
 * NewHome component.
 * @example
 * return (
 *   <NewHome />
 * )
 * @returns {React.ReactElement} component.
 */
const NewHome = ({ title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Code animation component
  const CodeAnimation = () => (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0.1,
        fontFamily: '"Courier New", monospace',
        fontSize: "14px",
        lineHeight: 1.5,
        color: "primary.main",
        pointerEvents: "none",
        overflow: "hidden",
        p: 2,
      }}
    >
      {[
        "const softwareEngineer = {",
        "  name: 'Shon Little',",
        "  role: 'Software Engineering Manager',",
        "  company: 'Boston Consulting Group',",
        "  location: 'Los Angeles, CA',",
        "  passion: 'Building scalable solutions',",
        "};",
      ].map((line, index) => (
        <Typography
          key={index}
          sx={{
            my: 0.5,
            animation: "typewriter 20s linear infinite",
            animationDelay: `${index * 0.5}s`,
            "@keyframes typewriter": {
              "0%": { width: 0 },
              "50%": { width: "100%" },
              "100%": { width: 0 },
            },
          }}
        >
          {line}
        </Typography>
      ))}
    </Box>
  );

  // Skill Category component
  const SkillCategory = ({ title, skills }) => (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 4,
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Typography
        variant="h6"
        color="secondary.main"
        gutterBottom
        sx={{ fontSize: "1.3rem" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.5,
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              bgcolor: "rgba(0, 102, 204, 0.2)",
              color: "secondary.main",
              p: "0.5rem 0",
              borderRadius: "25px",
              fontSize: "0.9rem",
              border: "1px solid",
              borderColor: "primary.main",
            }}
          />
        ))}
      </Box>
    </Paper>
  );

  // Project Card component
  const ProjectCard = ({ icon, title, subtitle, description, technologies, links }) => (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0, 102, 204, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          height: 200,
          background: "linear-gradient(45deg, #0066cc, #00d4ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "3rem",
          color: "white",
        }}
      >
        {icon}
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.3rem",
            fontWeight: 600,
            mb: 1,
            color: "text.primary",
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ mb: 1 }}
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0.5,
            mb: 2,
          }}
        >
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                bgcolor: "rgba(255, 107, 53, 0.2)",
                color: "accent.main",
                p: "0.3rem 0",
                borderRadius: "15px",
                fontSize: "0.8rem",
                border: "1px solid",
                borderColor: "accent.main",
              }}
            />
          ))}
        </Box>
      </CardContent>
      {links && links.length > 0 && (
        <CardActions sx={{ px: 3, pb: 3 }}>
          {links.map((link, index) => (
            <Button
              key={index}
              size="small"
              component={MuiLink}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              disabled={!link.url || link.url === "#"}
              sx={{
                p: "0.5rem 1rem",
                bgcolor: "transparent",
                border: "1px solid",
                borderColor: "primary.main",
                color: "primary.main",
                borderRadius: "25px",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
              }}
            >
              {link.text}
            </Button>
          ))}
        </CardActions>
      )}
    </Card>
  );

  // Experience Item component
  const ExperienceItem = ({ date, title, company, description, isEven }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: isEven ? "flex-start" : "flex-end",
        pl: isEven ? { xs: 4, md: 2 } : 0,
        pr: isEven ? 0 : { xs: 0, md: 2 },
        position: "relative",
        mb: 4,
        width: { xs: "100%", md: "50%" },
        ml: isEven ? { xs: 0, md: "auto" } : 0,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 4,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          maxWidth: 400,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 20,
            right: isEven ? { xs: "auto", md: -10 } : -10,
            left: isEven ? -10 : { xs: -10, md: "auto" },
            width: 0,
            height: 0,
            border: "10px solid transparent",
            borderLeftColor: isEven
              ? { xs: "transparent", md: "background.paper" }
              : "transparent",
            borderRightColor: isEven
              ? "background.paper"
              : { xs: "background.paper", md: "transparent" },
          },
        }}
      >
        <Typography
          variant="subtitle1"
          color="secondary.main"
          sx={{ fontWeight: 600, mb: 0.5 }}
        >
          {date}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "1.2rem", fontWeight: 700, mb: 0.5 }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="accent.main"
          sx={{ mb: 1 }}
        >
          {company}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </Box>
  );

  // Render component.
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* Navigation */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                fontSize: "1.5rem",
                background:
                  "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shon Little
            </Typography>
            {!isMobile && (
              <List sx={{ display: "flex" }}>
                {["home", "about", "skills", "projects", "experience", "contact"].map(
                  (item) => (
                    <ListItem
                      key={item}
                      button
                      onClick={() => scrollToSection(item)}
                      sx={{
                        px: 2,
                        "&:hover": {
                          bgcolor: "transparent",
                          "& .MuiListItemText-primary": {
                            color: "secondary.main",
                            "&::after": {
                              width: "100%",
                            },
                          },
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.charAt(0).toUpperCase() + item.slice(1)}
                        primaryTypographyProps={{
                          sx: {
                            color: "text.primary",
                            position: "relative",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: -5,
                              left: 0,
                              width: 0,
                              height: 2,
                              background:
                                "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                              transition: "width 0.3s ease",
                            },
                          },
                        }}
                      />
                    </ListItem>
                  )
                )}
              </List>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="home"
        component="section"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `
              radial-gradient(circle at 20% 50%, rgba(0, 102, 204, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 107, 53, 0.2) 0%, transparent 50%)
            `,
            animation: "float 20s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
              "50%": { transform: "translateY(-20px) rotate(1deg)" },
            },
          }}
        />
        <CodeAnimation />
        <Fade in={visibleSections.home || true} timeout={1000}>
          <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2, px: 3 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "4rem" },
                fontWeight: 700,
                mb: 1,
                background:
                  "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Shon Little
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                mb: 2,
              }}
            >
              Software Engineering Manager
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                mb: 4,
                color: "text.primary",
              }}
            >
              Building next-generation AI and IoT solutions at Boston Consulting Group. 
              From GenAI platforms transforming customer experiences to digital twins revolutionizing manufacturing - 
              I lead teams that turn cutting-edge technology into measurable business impact.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection("projects")}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0, 102, 204, 0.3)",
                  },
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("contact")}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderColor: "primary.main",
                  color: "text.primary",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(0, 102, 204, 0.3)",
                    borderColor: "primary.main",
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>
          </Container>
        </Fade>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        component="section"
        sx={{
          py: 8,
          px: 3,
        }}
      >
        <Container maxWidth="lg">
          <Fade in={visibleSections.about || false} timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  mb: 6,
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                About Me
              </Typography>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -20,
                        left: -20,
                        right: 20,
                        bottom: 20,
                        background:
                          "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                        borderRadius: 4,
                        zIndex: -1,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: 400,
                        bgcolor: "background.paper",
                        borderRadius: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "4rem",
                        color: "text.secondary",
                      }}
                    >
                      👨‍💻
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    As a Software Engineering Manager at Boston Consulting Group, I architect and deliver transformative 
                    technology solutions for Fortune 500 clients across telecommunications, manufacturing, healthcare, and beyond. 
                    My expertise spans from GenAI platforms and IoT ecosystems to enterprise APIs and optimization algorithms.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      mb: 2,
                    }}
                  >
                    I've led engineering teams through rapid prototyping to production deployment, turning data science concepts 
                    into scalable systems that drive real business outcomes. Whether it's implementing DEEP.AI for customer 
                    management, building digital twins for manufacturing, or creating AI-powered inspection tools, I bridge 
                    the gap between cutting-edge research and practical business solutions.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                    }}
                  >
                    My approach combines technical depth with strategic thinking - understanding not just how to build something, 
                    but why it matters and how it fits into the broader business ecosystem. I'm passionate about mentoring teams, 
                    fostering innovation, and delivering solutions that create lasting impact.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        id="skills"
        component="section"
        sx={{
          py: 8,
          px: 3,
        }}
      >
        <Container maxWidth="lg">
          <Fade in={visibleSections.skills || false} timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  mb: 6,
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Technical Expertise
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <SkillCategory
                    title="Programming & Platforms"
                    skills={[
                      "Python",
                      "JavaScript",
                      "TypeScript",
                      "C#",
                      "SQL",
                      "VBA",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <SkillCategory
                    title="AI & Machine Learning"
                    skills={[
                      "Generative AI",
                      "Machine Learning",
                      "Predictive Analytics",
                      "Computer Vision",
                      "NLP",
                      "Bioinformatics",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <SkillCategory
                    title="Cloud & Infrastructure"
                    skills={[
                      "Azure",
                      "Event Grid",
                      "Cosmos DB",
                      "IoT Hub",
                      "Docker",
                      "MQTT",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <SkillCategory
                    title="Enterprise Integration"
                    skills={[
                      "Oracle",
                      "Vendavo",
                      "REST APIs",
                      "AMQP",
                      "Real-time Systems",
                      "High Availability",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <SkillCategory
                    title="Specialized Domains"
                    skills={[
                      "Digital Twins",
                      "Edge Computing",
                      "Optimization Algorithms",
                      "Geospatial Analysis",
                      "Manufacturing Systems",
                      "Telecommunications",
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <SkillCategory
                    title="Leadership & Strategy"
                    skills={[
                      "Technical Leadership",
                      "Solution Architecture",
                      "Rapid Prototyping",
                      "Cross-functional Teams",
                      "Client Engagement",
                      "MVP Development",
                    ]}
                  />
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        component="section"
        sx={{
          py: 8,
          px: 3,
        }}
      >
        <Container maxWidth="lg">
          <Fade in={visibleSections.projects || false} timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  mb: 6,
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Featured Projects
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={4}>
                  <ProjectCard
                    icon="🤖"
                    title="DEEP.AI Platform Implementation"
                    subtitle=""
                    description="Led the deployment of BCG's GenAI-powered customer management platform for major telecom providers and B2B companies. Enhanced upselling, reduced churn, and transformed digital customer interactions with real-time AI insights."
                    technologies={[
                      "GenAI",
                      "Machine Learning",
                      "Customer Analytics",
                      "Real-time Processing",
                    ]}
                    links={[
                      { text: "Case Study", url: "#" },
                      { text: "Technical Details", url: "#" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <ProjectCard
                    icon="🏭"
                    title="Factory of the Future - IoT & Digital Twin"
                    subtitle=""
                    description="Modernized manufacturing operations for JBT and Cargill Salt using IoT sensors, digital twins, and edge computing. Built high-volume data ingestion systems with MQTT, Azure Event Grid, and real-time dashboards for predictive maintenance."
                    technologies={[
                      "IoT",
                      "Digital Twin",
                      "Azure",
                      "MQTT",
                      "Edge Computing",
                    ]}
                    links={[
                      { text: "Architecture", url: "#" },
                      { text: "Impact Report", url: "#" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <ProjectCard
                    icon="💊"
                    title="DRUG.AI - Pharma Discovery Platform"
                    subtitle=""
                    description="Built an AI-powered tool that analyzes gene-disease relationships to suggest new uses for existing drugs. Transformed data science prototypes into production-ready systems, accelerating hypothesis generation in pharmaceutical discovery."
                    technologies={[
                      "AI/ML",
                      "Bioinformatics",
                      "Data Science",
                      "Production APIs",
                    ]}
                    links={[
                      { text: "Research Paper", url: "#" },
                      { text: "Demo", url: "#" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <ProjectCard
                    icon="✈️"
                    title="KLM Flight Rerouting Optimization"
                    subtitle=""
                    description="Developed a real-time flight rerouting optimization engine for major EU airline disruptions. Went from concept to functional prototype in days, helping avoid substantial revenue loss during operational crises."
                    technologies={[
                      "Optimization Algorithms",
                      "Real-time Systems",
                      "Aviation",
                      "Rapid Prototyping",
                    ]}
                    links={[
                      { text: "Algorithm Details", url: "#" },
                      { text: "Case Study", url: "#" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <ProjectCard
                    icon="💰"
                    title="Emerson Pricing API"
                    subtitle=""
                    description="Led development of a mission-critical pricing API for industrial energy solutions. Integrated with Oracle and Vendavo for real-time pricing guidance, designed for high availability and low latency."
                    technologies={[
                      "REST APIs",
                      "Oracle Integration",
                      "High Availability",
                      "Enterprise Systems",
                    ]}
                    links={[
                      { text: "API Documentation", url: "#" },
                      { text: "Performance Metrics", url: "#" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <ProjectCard
                    icon="🔍"
                    title="AI-Powered Inspection Tools"
                    subtitle=""
                    description="Developed mobile inspection applications using AI and geospatial analysis for nonprofit enforcement teams. Built predictive models to optimize inspection targeting, resulting in more efficient and impactful operations."
                    technologies={[
                      "Mobile Development",
                      "Geospatial Analysis",
                      "Predictive AI",
                      "Public Safety",
                    ]}
                    links={[
                      { text: "Impact Metrics", url: "#" },
                      { text: "Technical Overview", url: "#" },
                    ]}
                  />
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box
        id="experience"
        component="section"
        sx={{
          py: 8,
          px: 3,
        }}
      >
        <Container maxWidth="lg">
          <Fade in={visibleSections.experience || false} timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  mb: 6,
                  background:
                    "linear-gradient(135deg, #0066cc 0%, #00d4ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Professional Journey
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  mt: 4,
                  "&::before": {
                    content: '""',
                    position: "absolute
