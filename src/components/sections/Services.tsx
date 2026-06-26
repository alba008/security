import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 14 },
        background:
          "radial-gradient(circle at top right, rgba(212,175,55,.12), transparent 32%), linear-gradient(180deg, #05070d 0%, #0b1220 50%, #05070d 100%)",
        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "0.9fr 1.1fr",
            },
            gap: { xs: 4, lg: 8 },
            alignItems: "end",
            mb: { xs: 5, md: 8 },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#d4af37",
                fontWeight: 900,
                letterSpacing: 2,
                mb: 1.5,
                fontSize: { xs: "0.75rem", md: "0.85rem" },
              }}
            >
              OUR SERVICES
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "1.95rem",
                  sm: "2.4rem",
                  md: "3.4rem",
                  lg: "4rem",
                },
                fontWeight: 950,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                maxWidth: 780,
              }}
            >
              Security Services Built For Modern Organizations
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#94a3b8",
                lineHeight: 1.8,
                fontSize: { xs: "0.95rem", md: "1rem" },
                maxWidth: 620,
                ml: { lg: "auto" },
                mb: 3,
              }}
            >
              Protecting businesses, events, construction projects, residential
              communities and corporate facilities throughout New York with
              professional, scalable security coverage.
            </Typography>

            <Button
              href="/services"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#000",
                background: "#d4af37",
                borderRadius: "999px",
                px: 3,
                py: 1.2,
                fontWeight: 900,
                textTransform: "none",
                "&:hover": {
                  background: "#f0c94d",
                },
              }}
            >
              Explore Services
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: {
              md: "1fr 1fr",
              lg: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 3 },
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
          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                flex: {
                  xs: "0 0 82%",
                  sm: "0 0 48%",
                  md: "initial",
                },
                minWidth: { xs: 280, sm: 330, md: "auto" },
                scrollSnapAlign: "start",
                transition: ".3s ease",

                "&:hover": {
                  transform: { xs: "none", md: "translateY(-6px)" },
                },
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                image={service.image}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}