import { Avatar, Box, Container, Paper, Typography } from "@mui/material";
import { leadership } from "../../data/leadership";

export default function Leadership() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(180deg, #05070d 0%, #080d16 50%, #05070d 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={eyebrow}>LEADERSHIP</Typography>

        <Typography sx={title}>Leadership That Sets The Standard</Typography>

        <Typography sx={subtitle}>
          Professional leadership built on accountability, integrity, and
          excellence.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2.5, md: 4 },
          }}
        >
          {leadership.map((leader) => (
            <Paper key={leader.name} elevation={0} sx={card}>
              <Avatar src={leader.image} sx={avatar} />

              <Box>
                <Typography sx={name}>{leader.name}</Typography>
                <Typography sx={role}>{leader.title}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

const eyebrow = {
  color: "#d4af37",
  textAlign: "center",
  fontWeight: 900,
  letterSpacing: 2,
  fontSize: { xs: ".75rem", md: ".85rem" },
  mb: 1.5,
};

const title = {
  fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3.6rem" },
  fontWeight: 950,
  lineHeight: 1.08,
  textAlign: "center",
  maxWidth: 850,
  mx: "auto",
  mb: 2,
};

const subtitle = {
  textAlign: "center",
  color: "#94a3b8",
  maxWidth: 650,
  mx: "auto",
  mb: { xs: 5, md: 8 },
  fontSize: { xs: ".95rem", md: "1rem" },
};

const card = {
  p: { xs: 2.4, md: 4 },
  borderRadius: { xs: "22px", md: "30px" },
  display: "flex",
  gap: { xs: 2, md: 3 },
  alignItems: "flex-start",
  background:
    "linear-gradient(145deg, rgba(17,24,39,.96), rgba(11,18,32,.96))",
  border: "1px solid rgba(255,255,255,.07)",
  color: "#fff",
  transition: ".3s ease",
  "&:hover": {
    transform: { xs: "none", md: "translateY(-6px)" },
    borderColor: "rgba(212,175,55,.38)",
    boxShadow: "0 22px 60px rgba(212,175,55,.10)",
  },
};

const avatar = {
  width: { xs: 70, md: 118 },
  height: { xs: 70, md: 118 },
  border: "2px solid rgba(212,175,55,.35)",
};

const name = {
  fontSize: { xs: "1.05rem", md: "1.4rem" },
  fontWeight: 900,
};

const role = {
  color: "#d4af37",
  fontWeight: 800,
  mb: 1,
  fontSize: { xs: ".85rem", md: ".95rem" },
};

