import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import heroImage from "../../assets/images/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingTop: {
          xs: "120px", // mobile
          sm: "110px",
          md: "0px",   // desktop
        },       backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",     
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Gold Glow */}
      <Box
  sx={{
    position: "absolute",
    inset: 0,
    background: `
      linear-gradient(
        90deg,
        rgba(5,7,13,.95) 20%,
        rgba(5,7,13,.88) 25%,
        rgba(5,7,13,.65) 55%,
        rgba(5,7,13,.25) 100%
      )
    `,
    zIndex: 1,
  }}
/>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 6,
            alignItems: "center",
            position: "relative",
            zIndex: 2,
        
          }}
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              TRUSTED SECURITY PARTNER
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "5rem",
                },
                fontWeight: 900,
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              Elite Security
              <br />
              Solutions.
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "1.15rem",
                maxWidth: 650,
                mb: 4,
              }}
            >
              Protecting businesses, events,
              construction sites and communities
              throughout New York with highly
              trained licensed security professionals.
            </Typography>

            <Stack
  direction="row"
  spacing={2}
  sx={{
    mt: 5,
  }}
>
  <Button
    component={Link}
    to="/request-quote"
    variant="contained"
    sx={{
      background: "#d4af37",
      color: "#000",
      fontWeight: 700,
      px: 4,
      py: 1.5,
      borderRadius: "14px",

      "&:hover": {
        background: "#f0c95e",
      },
    }}
  >
    Request Consultation
  </Button>
</Stack>
          </Box>

          {/* RIGHT */}
         {/* RIGHT */}
<Box
  sx={{
    display: {
      xs: "none",
      md: "block",
    },
    minHeight: 400,
    position: "relative",
  }}
>
            <Box
             
              sx={{
                width: "100%",
                borderRadius: "24px",
              }}
            />

<Paper
  elevation={0}
  sx={{
    display: {
      xs: "none",
      md: "block",
    },

    position: "absolute",
    bottom: 30,
    right: 20,
    width: 320,
    p: 3,

    borderRadius: "24px",

    background: "rgba(255,255,255,.05)",

    backdropFilter: "blur(16px)",

    border: "1px solid rgba(255,255,255,.08)",

    color: "#94a3b8",

  }}
>
              <Metric
                title="Active Officers"
                value="72"
              />

              <Metric
                title="Protected Sites"
                value="45"
              />

              <Metric
                title="Events Today"
                value="18"
              />

              <Metric
                title="Response Time"
                value="3.2m"
              />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        py: 1,
      }}
    >
      <Typography color="#94a3b8">
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#d4af37",
          fontWeight: 700,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}