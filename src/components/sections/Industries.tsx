import {
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";
import ConstructionIcon from "@mui/icons-material/Construction";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export default function Industries() {
  const industries = [
    {
      icon: <ConstructionIcon />,
      title: "Construction Sites",
      description: "24/7 site protection, access control and asset security.",
    },
    {
      icon: <EventAvailableIcon />,
      title: "Events & Venues",
      description: "Crowd management and event security professionals.",
    },
    {
      icon: <BusinessCenterIcon />,
      title: "Corporate Offices",
      description: "Reception security, patrols and executive support.",
    },
    {
      icon: <StorefrontIcon />,
      title: "Retail Locations",
      description: "Loss prevention and customer safety services.",
    },
    {
      icon: <HomeWorkIcon />,
      title: "Residential Communities",
      description: "Luxury buildings, HOA communities and concierge security.",
    },
    {
      icon: <ApartmentIcon />,
      title: "Commercial Properties",
      description: "Comprehensive protection for facilities and tenants.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(180deg, #05070d 0%, #080d16 45%, #05070d 100%)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#d4af37",
            fontWeight: 800,
            textAlign: "center",
            letterSpacing: 2,
            mb: 1.5,
            fontSize: { xs: "0.75rem", md: "0.85rem" },
          }}
        >
          WHO WE PROTECT
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.9rem",
              sm: "2.3rem",
              md: "3.4rem",
              lg: "4rem",
            },
            fontWeight: 900,
            lineHeight: 1.08,
            maxWidth: 850,
            mx: "auto",
            mb: 2.5,
          }}
        >
          Security Solutions For Every Industry
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: 720,
            mx: "auto",
            mb: { xs: 5, md: 8 },
            fontSize: { xs: "0.95rem", md: "1rem" },
            lineHeight: 1.8,
          }}
        >
          From construction projects and corporate facilities to luxury
          residential communities and major public events, Empire Security
          delivers customized protection solutions.
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: {
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            },
            gap: { xs: 2, md: 4 },
            overflowX: { xs: "auto", md: "visible" },
            scrollSnapType: { xs: "x mandatory", md: "none" },
            WebkitOverflowScrolling: "touch",
            pb: { xs: 2, md: 0 },
            px: { xs: 0.5, md: 0 },

            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          {industries.map((industry) => (
            <Paper
              key={industry.title}
              elevation={0}
              sx={{
                flex: {
                  xs: "0 0 78%",
                  sm: "0 0 46%",
                  md: "initial",
                },
                minWidth: { xs: 260, sm: 300, md: "auto" },
                scrollSnapAlign: "start",
                p: { xs: 2.5, md: 4 },
                borderRadius: { xs: "20px", md: "24px" },
                color: "#fff",
                background:
                  "linear-gradient(145deg, rgba(17,24,39,.96), rgba(11,18,32,.96))",
                border: "1px solid rgba(255,255,255,.07)",
                transition: ".3s ease",
                minHeight: { xs: 240, md: 290 },

                "&:hover": {
                  transform: { xs: "none", md: "translateY(-8px)" },
                  border: "1px solid rgba(212,175,55,.35)",
                  boxShadow: "0 20px 60px rgba(212,175,55,.12)",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: 54, md: 70 },
                  height: { xs: 54, md: 70 },
                  borderRadius: { xs: "15px", md: "18px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(212,175,55,.12)",
                  border: "1px solid rgba(212,175,55,.25)",
                  mb: { xs: 2.2, md: 3 },

                  "& svg": {
                    color: "#d4af37",
                    fontSize: { xs: 28, md: 34 },
                  },
                }}
              >
                {industry.icon}
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.4rem" },
                  fontWeight: 850,
                  mb: 1.5,
                  lineHeight: 1.25,
                }}
              >
                {industry.title}
              </Typography>

              <Typography
                sx={{
                  color: "#94a3b8",
                  lineHeight: 1.7,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                {industry.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}