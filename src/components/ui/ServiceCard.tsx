import {
    Box,
    Typography,
  } from "@mui/material";
  
  interface Props {
    title: string;
    description: string;
    image: string;
  }
  
  export default function ServiceCard({
    title,
    description,
    image,
  }: Props) {
    return (
      <Box
        sx={{
          height: 420,
          borderRadius: "28px",
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
  
          "&:hover img": {
            transform: "scale(1.08)",
          },
  
          "&:hover .overlay": {
            background:
              "linear-gradient(to top, rgba(0,0,0,.95), rgba(0,0,0,.4))",
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: ".6s ease",
          }}
        />
  
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
  
            background:
              "linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.2))",
  
            transition: ".4s ease",
  
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
  
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              mb: 1,
            }}
          >
            {title}
          </Typography>
  
          <Typography
            sx={{
              color: "#d1d5db",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    );
  }