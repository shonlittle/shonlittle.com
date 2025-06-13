/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-06-12
 */

// Add third-party dependencies.
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Alert,
  alpha,
  useTheme,
} from '@mui/material';
import { Send as SendIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PropTypes from 'prop-types';

// Custom ValidationError component wrapper
const CustomValidationError = ({ children }) => (
  <Typography variant="caption" color="error" sx={{ mt: -2 }}>
    {children}
  </Typography>
);

CustomValidationError.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Email component with modern styling.
 * @example
 * return (
 *   <Email />
 * )
 * @returns {React.ReactElement} component.
 */
const Email = () => {
  // Initialize Formspree form handling
  const [state, handleSubmit] = useForm('xldnbavj');
  const theme = useTheme();

  // Set navigation hook.
  const navigate = useNavigate();

  // No longer need to add keyframes as they're in the theme

  if (state.succeeded) {
    return (
      <Container maxWidth="sm" sx={{ my: 4, px: 2 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            background: alpha(theme.palette.success.main, 0.05),
            border: `1px solid ${alpha(theme.palette.success.main, 0.1)}`,
            textAlign: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: '4rem',
              color: theme.palette.success.main,
              mb: 2,
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              color: theme.palette.success.main,
              mb: 1,
            }}
          >
            Thanks for the message!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            I&apos;ll be in touch soon.
          </Typography>
          <Button
            onClick={() => navigate('/software')}
            variant="gradient"
            disabled={state.submitting}
            size="large"
            startIcon={state.submitting ? <CircularProgress size={20} color="inherit" /> : <ArrowBackIcon />}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              '&.Mui-disabled': {
                background: alpha(theme.palette.action.disabled, 0.3),
              },
            }}
          >
            Go Back
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ my: 4, px: 2 }}>
      <Paper
        elevation={6}
        variant="hover"
        sx={{
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="gradient"
          component="h1"
          sx={{
            fontWeight: 600,
            textAlign: 'center',
            mb: 1,
            fontSize: '2rem',
          }}
        >
          Get in Touch
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            mb: 4,
            lineHeight: 1.6,
          }}
        >
          I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            required
            fullWidth
            disabled={state.submitting}
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: 2,
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: alpha(theme.palette.primary.main, 0.5),
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                },
              },
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} component={CustomValidationError} />

          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            rows={4}
            placeholder="Tell me what's on your mind..."
            required
            fullWidth
            disabled={state.submitting}
            variant="outlined"
            InputProps={{
              sx: {
                borderRadius: 2,
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: alpha(theme.palette.primary.main, 0.5),
                },
                '&.Mui-focused fieldset': {
                  borderColor: theme.palette.primary.main,
                  borderWidth: 2,
                },
              },
            }}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} component={CustomValidationError} />

          {state.errors && state.errors.length > 0 && (
            <Alert severity="error" sx={{ borderRadius: 2 }}>
              Please check your form for errors and try again.
            </Alert>
          )}

          <Button
            type="submit"
            variant="gradient"
            disabled={state.submitting}
            size="large"
            startIcon={state.submitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 2,
              '&.Mui-disabled': {
                background: alpha(theme.palette.action.disabled, 0.3),
              },
            }}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Email;
