import {
    Paper,
    Typography,
    Box,
  } from "@mui/material";
  
  export default function IndustryCard({
    title,
    Icon,
  }: any) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: 220,
          borderRadius: "24px",
  
          background:
            "linear-gradient(145deg,#111827,#0b1220)",
  
          border:
            "1px solid rgba(255,255,255,.06)",
  
          transition: ".35s ease",
  
          cursor: "pointer",
  
          "&:hover": {
            transform:
              "translateY(-8px)",
  
            border:
              "1px solid rgba(212,175,55,.4)",
  
            boxShadow:
              "0 20px 50px rgba(212,175,55,.15)",
          },
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "18px",
  
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
  
            background:
              "rgba(212,175,55,.1)",
  
            mb: 3,
          }}
        >
          <Icon
            size={34}
            color="#d4af37"
          />
        </Box>
  
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          {title}
        </Typography>
  
        <Typography
          sx={{
            color: "#a0a0a0",
          }}
        >
          Professional security
          services tailored for
          this industry.
        </Typography>
      </Paper>
    );
  }