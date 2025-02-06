import { useState } from 'react'; // Import useState
import { useTheme } from '@mui/material/styles'; // Import useTheme
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Utility function to create text gradients
export const textGradient = (gradient) => ({
  background: `linear-gradient(${gradient})`,
  WebkitBackgroundClip: 'text', // This clips the gradient to the text
  color: 'transparent', // Make text transparent so the gradient is visible
});

export function HomeHeroCYSE1008() {
  const theme = useTheme(); // Define theme using the useTheme hook
  const [clicked, setClicked] = useState(false); // State variable to track button click

  // Click handler to update the state
  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };

  return (
    <>
      {/* <div>Hello World</div> */}
      <Box
        component="h1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: 680,
          fontFamily: theme.typography.fontSecondaryFamily,
          fontWeight: 700, // Bold text for emphasis
          textAlign: 'center',
          letterSpacing: 2, // Added spacing between letters for a more professional look
          [theme.breakpoints.up('lg')]: { fontSize: 72, lineHeight: '90px' },
        }}
      >
        {/* Adding professional typography and spacing */}
        <Box
          component="span"
          sx={{
            display: 'block',
            opacity: 0.6, // Slightly faded to give it a subtle touch
            letterSpacing: 3, // Spacing for the first part of the text
            fontWeight: 500, // Light weight for the first part
            textTransform: 'uppercase', // Uppercase for a modern feel
            fontSize: { xs: 24, sm: 32, md: 40 },
          }}
        >
          THE
        </Box>

        <Box
          component="span"
          sx={{
            fontSize: { xs: 40, sm: 50, md: 64 },
            fontWeight: 700, // Bold for the main brand name
            letterSpacing: 4, // Increased spacing for a more branded feel
            textTransform: 'uppercase', // Uppercase for better branding
            color: theme.vars.palette.text.primary, // Default text color from the theme
          }}
        >
          HARKIRAT
        </Box>

        {/* Animated text with a smooth gradient */}
        <Box
          component="span"
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 3, // Smoother transition duration
            ease: 'ease-in-out',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.secondary.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.secondary.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            fontSize: { xs: 36, sm: 48, md: 60 },
            fontWeight: 600, // Slightly lighter than HARKIRAT for emphasis
            textTransform: 'uppercase',
            letterSpacing: 2,
            ml: { xs: 0.75, md: 1, xl: 1.5 },
            textAlign: 'center', // Center-align the brand name for a professional layout
            mt: 1, // Space between HARKIRAT and WEARS
          }}
        >
          WEARS
        </Box>
      </Box>

      {/* Button with variant and primary color theme */}
      <Button
        variant="contained"
        color="primary" // Primary color theme applied
        sx={{ mt: 2 }} // Optional margin-top for spacing
        onClick={handleClick} // Trigger handleClick on button click
      >
        {clicked ? 'You Clicked Me!' : 'Hi I am a Button'}
      </Button>
    </>
  );
}

