import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
  } from "@mui/material";
  
  const testimonials = [
    {
      name: "Michael R.",
      company: "Event Organizer",
      quote:
        "Empire Security delivered exceptional service during our event. Their team was professional, responsive, and highly organized.",
    },
    {
      name: "Sarah L.",
      company: "Property Manager",
      quote:
        "We trust Empire Security with our residential properties. Their officers are reliable, courteous, and proactive.",
    },
    {
      name: "David M.",
      company: "Construction Manager",
      quote:
        "Their construction site security services helped reduce unauthorized access and provided peace of mind for our project team.",
    },
  ];
  
  export default function Testimonials() {
    return (
      <Box
        sx={{
          py: 14,
          background: "#0b1220",
        }}
      >
        <Container maxWidth="xl">
          <Typography
            sx={{
              color: "#d4af37",
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
            }}
          >
            CLIENT TESTIMONIALS
          </Typography>
  
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 900,
              mb: 8,
            }}
          >
            What Our Clients Say
          </Typography>
  
          <Grid container spacing={4}>
            {testimonials.map((item) => (
              <Grid item xs={12} md={4} key={item.name}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: "24px",
                    background:
                      "linear-gradient(145deg,#111827,#0b1220)",
                    border:
                      "1px solid rgba(255,255,255,.06)",
  
                    transition: ".3s ease",
  
                    "&:hover": {
                      transform: "translateY(-6px)",
                      border:
                        "1px solid rgba(212,175,55,.4)",
                      boxShadow:
                        "0 20px 50px rgba(212,175,55,.12)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#cbd5e1",
                      lineHeight: 1.8,
                      mb: 3,
                      fontStyle: "italic",
                    }}
                  >
                    "{item.quote}"
                  </Typography>
  
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </Typography>
  
                  <Typography
                    sx={{
                      color: "#d4af37",
                      fontSize: ".9rem",
                    }}
                  >
                    {item.company}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }