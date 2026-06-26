import { Box, Container, Typography } from "@mui/material";

const companies = [
  "LIVE NATION",
  "BARCLAYS CENTER",
  "HYATT",
  "MADISON SQUARE GARDEN",
  "MARRIOTT",
  "HILTON",
];

export default function TrustedBy() {
  const marqueeItems = [...companies, ...companies, ...companies];

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        background:
          "radial-gradient(circle at center, rgba(212,175,55,.12), transparent 35%), #05070d",
        borderTop: "1px solid rgba(212,175,55,.12)",
        borderBottom: "1px solid rgba(212,175,55,.12)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            color: "#d4af37",
            fontWeight: 900,
            mb: 1.5,
            textAlign: "center",
            letterSpacing: { xs: 2, md: 5 },
            fontSize: { xs: ".8rem", md: "1rem" },
          }}
        >
          TRUSTED BY LEADING BRANDS
        </Typography>

        <Typography
          sx={{
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: 620,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            fontSize: { xs: ".95rem", md: "1.05rem" },
            lineHeight: 1.8,
          }}
        >
          Proud to support organizations across hospitality, entertainment,
          real estate, and commercial operations.
        </Typography>
      </Container>

      <Box sx={marqueeWrap}>
        <Box sx={fadeLeft} />
        <Box sx={fadeRight} />

        <Box sx={marqueeTrack}>
          {marqueeItems.map((company, index) => (
            <Box key={`${company}-${index}`} sx={brandCard}>
              {company}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const marqueeWrap = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderTop: "1px solid rgba(212,175,55,.18)",
  borderBottom: "1px solid rgba(212,175,55,.18)",
  background: "rgba(0,0,0,.22)",
  py: { xs: 2, md: 3 },
};

const marqueeTrack = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 2, md: 3 },
  width: "max-content",
  animation: "marquee 28s linear infinite",

  "@keyframes marquee": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-33.333%)",
    },
  },

  "&:hover": {
    animationPlayState: "paused",
  },
};

const brandCard = {
  minWidth: { xs: 180, sm: 220, md: 260 },
  height: { xs: 74, md: 92 },
  px: { xs: 2, md: 3 },
  borderRadius: { xs: "18px", md: "24px" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "rgba(255,255,255,.45)",
  fontWeight: 950,
  fontSize: { xs: ".82rem", sm: ".95rem", md: "1.05rem" },
  letterSpacing: { xs: 1.4, md: 2 },
  whiteSpace: "nowrap",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015))",
  border: "1px solid rgba(255,255,255,.07)",
  transition: ".3s ease",

  "&:hover": {
    color: "#d4af37",
    borderColor: "rgba(212,175,55,.4)",
    boxShadow: "0 18px 50px rgba(212,175,55,.12)",
    transform: "translateY(-3px)",
  },
};

const fadeLeft = {
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: { xs: 50, md: 140 },
  zIndex: 2,
  pointerEvents: "none",
  background:
    "linear-gradient(90deg, #05070d 0%, rgba(5,7,13,.75) 45%, transparent 100%)",
};

const fadeRight = {
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: { xs: 50, md: 140 },
  zIndex: 2,
  pointerEvents: "none",
  background:
    "linear-gradient(270deg, #05070d 0%, rgba(5,7,13,.75) 45%, transparent 100%)",
};