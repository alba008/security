import { Paper, Typography, Box } from "@mui/material";

interface StatCardProps {
value: number | string;
suffix?: string;
title: string;
icon?: React.ReactNode;
}

export default function StatCard({
value,
suffix = "",
title,
icon,
}: StatCardProps) {
return (
<Paper
elevation={0}
sx={{
p: 4,
textAlign: "center",


    borderRadius: "24px",

    background:
      "linear-gradient(145deg,#111827,#0b1220)",

    border:
      "1px solid rgba(255,255,255,.06)",

    transition: "all .35s ease",

    position: "relative",

    overflow: "hidden",

    "&:before": {
      content: '""',
      position: "absolute",
      inset: 0,

      background:
        "linear-gradient(135deg, rgba(212,175,55,.05), transparent)",

      opacity: 0,

      transition: ".35s ease",
    },

    "&:hover": {
      transform: "translateY(-10px)",

      border:
        "1px solid rgba(212,175,55,.35)",

      boxShadow:
        "0 25px 70px rgba(212,175,55,.12)",
    },

    "&:hover:before": {
      opacity: 1,
    },
  }}
>
  <Box
    sx={{
      width: 72,
      height: 72,

      mx: "auto",
      mb: 3,

      borderRadius: "20px",

      background:
        "rgba(212,175,55,.12)",

      border:
        "1px solid rgba(212,175,55,.25)",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      "& svg": {
        color: "#d4af37",
        fontSize: 36,
      },
    }}
  >
    {icon}
  </Box>

  <Typography
    sx={{
      fontSize: {
        xs: "2.4rem",
        md: "3rem",
      },

      fontWeight: 900,
      color: "#fff",
      lineHeight: 1,
      mb: 1,
    }}
  >
    {value}
    <span
      style={{
        color: "#d4af37",
      }}
    >
      {suffix}
    </span>
  </Typography>

  <Typography
    sx={{
      color: "#94a3b8",
      fontWeight: 600,
    }}
  >
    {title}
  </Typography>
</Paper>


);
}
