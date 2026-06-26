import {
    Avatar,
    Paper,
    Typography,
  } from "@mui/material";
  
  interface Props {
    name: string;
    title: string;
    image: string;
    bio: string;
  }
  
  export default function LeadershipCard({
    name,
    title,
    image,
    bio,
  }: Props) {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "28px",
  
          background:
            "linear-gradient(145deg,#111827,#0b1220)",
  
          border:
            "1px solid rgba(255,255,255,.06)",
  
          transition: ".35s ease",
  
          "&:hover": {
            transform: "translateY(-8px)",
  
            border:
              "1px solid rgba(212,175,55,.4)",
  
            boxShadow:
              "0 20px 60px rgba(212,175,55,.15)",
          },
        }}
      >
        <Avatar
          src={image}
          sx={{
            width: 50,
            height: 50,
            mb: 3,
          }}
        />
  
  <Typography
  component="div"
  sx={{
    fontSize: "0.5rem",
    fontWeight: 800,
    color: "red",
  }}
>
  {name}
</Typography>
  
        <Typography
          sx={{
            color: "#d4af37",
            mb: 2,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
  
        <Typography
          sx={{
            color: "#cbd5e1",
            lineHeight: 1.8,
          }}
        >
          {bio}
        </Typography>
      </Paper>
    );
  }