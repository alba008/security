import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import StatCard from "../ui/StatCard";

export default function Stats() {
  const stats = [
    {
      value: 500,
      suffix: "+",
      title: "Events Protected",
      icon: <EventAvailableIcon />,
    },
    {
      value: 10,
      suffix: "+",
      title: "Years Of Excellence",
      icon: <VerifiedUserIcon />,
    },
    {
      value: 1200,
      suffix: "+",
      title: "Licensed Officers",
      icon: <GroupsIcon />,
    },
    {
      value: 24,
      suffix: "/7",
      title: "Emergency Response",
      icon: <SupportAgentIcon />,
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "radial-gradient(circle at top, rgba(212,175,55,.10), transparent 35%), #05070d",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#d4af37",
            textAlign: "center",
            fontWeight: 800,
            letterSpacing: 2,
            mb: 1.5,
            fontSize: { xs: "0.75rem", md: "0.85rem" },
          }}
        >
          WHY EMPIRE SECURITY
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "1.9rem",
              sm: "2.35rem",
              md: "3.4rem",
              lg: "4rem",
            },
            fontWeight: 950,
            lineHeight: 1.08,
            mb: 2.5,
            maxWidth: 850,
            mx: "auto",
          }}
        >
          Protection Backed By Experience
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: 680,
            mx: "auto",
            mb: { xs: 5, md: 8 },
            fontSize: { xs: "0.95rem", md: "1rem" },
            lineHeight: 1.8,
          }}
        >
          Trusted by businesses, event organizers, construction companies and
          property managers throughout New York.
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: {
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
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
          {stats.map((stat) => (
            <Box
              key={stat.title}
              sx={{
                flex: {
                  xs: "0 0 72%",
                  sm: "0 0 45%",
                  md: "initial",
                },
                minWidth: { xs: 230, sm: 280, md: "auto" },
                scrollSnapAlign: "start",
                transition: ".3s ease",

                "&:hover": {
                  transform: { xs: "none", md: "translateY(-6px)" },
                },
              }}
            >
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                title={stat.title}
                icon={stat.icon}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}