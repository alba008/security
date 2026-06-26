import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
  } from "@mui/material";
  
  import { Link } from "react-router-dom";
  
  const leaders = [
    {
      name: "JP Pennyfeather",
      title: "Founder & CEO",
      description:
        "Providing strategic leadership and operational excellence across Empire Security's services throughout New York.",
    },
    {
      name: "Angela Pennyfeather",
      title: "Executive Director",
      description:
        "Leading organizational growth, client success and workforce development while maintaining Empire Security's commitment to excellence.",
    },
  ];
  
  const values = [
    "Integrity",
    "Professionalism",
    "Reliability",
    "Accountability",
  ];
  
  export default function LeadershipPage() {
    return (
      <Box
        sx={{
          background: "#05070d",
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        {/* HERO */}
  
        <Box
          sx={{
            pt: 18,
            pb: 10,
            textAlign: "center",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
              }}
            >
              LEADERSHIP
            </Typography>
  
            <Typography
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "5rem",
                },
                fontWeight: 900,
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              Leadership You
              <br />
              Can Trust
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Empire Security is built on professionalism,
              accountability and a commitment to protecting
              people, property and communities throughout
              New York.
            </Typography>
          </Container>
        </Box>
  
        {/* MESSAGE */}
  
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 4,
                md: 6,
              },
              textAlign: "center",
              mb: 10,
            }}
          >
            <Typography
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                mb: 2,
              }}
            >
              OUR COMMITMENT
            </Typography>
  
            <Typography
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  md: "2rem",
                },
                fontWeight: 800,
                mb: 3,
              }}
            >
              Protecting What Matters Most
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                lineHeight: 1.9,
              }}
            >
              We believe security is more than a service.
              It is a responsibility. Every officer,
              supervisor and manager at Empire Security
              is committed to delivering professional,
              reliable and responsive protection tailored
              to our clients' needs.
            </Typography>
          </Paper>
        </Container>
  
        {/* LEADERSHIP TEAM */}
  
        <Container
          maxWidth="xl"
          sx={{
            pb: 12,
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              textAlign: "center",
              fontWeight: 700,
              mb: 2,
            }}
          >
            LEADERSHIP TEAM
          </Typography>
  
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "2rem",
                md: "4rem",
              },
              fontWeight: 900,
              mb: 8,
            }}
          >
            Meet Our Leaders
          </Typography>
  
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: 4,
            }}
          >
            {leaders.map((leader) => (
              <Paper
                key={leader.name}
                elevation={0}
                sx={{
                  p: 5,
                }}
              >
                <Box
                  sx={{
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background:
                      "rgba(212,175,55,.12)",
                    border:
                      "1px solid rgba(212,175,55,.25)",
                    mb: 3,
                  }}
                />
  
                <Typography
                  sx={{
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {leader.name}
                </Typography>
  
                <Typography
                  sx={{
                    color: "#d4af37",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  {leader.title}
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                  }}
                >
                  {leader.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
  
        {/* VALUES */}
  
        <Container
          maxWidth="xl"
          sx={{
            pb: 12,
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              textAlign: "center",
              fontWeight: 700,
              mb: 2,
            }}
          >
            CORE VALUES
          </Typography>
  
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "2rem",
                md: "4rem",
              },
              fontWeight: 900,
              mb: 8,
            }}
          >
            What Drives Us
          </Typography>
  
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(4,1fr)",
              },
              gap: 3,
            }}
          >
            {values.map((value) => (
              <Paper
                key={value}
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.3rem",
                  }}
                >
                  {value}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
  
        {/* CTA */}
  
        <Container
          maxWidth="lg"
          sx={{
            pb: 14,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 4,
                md: 6,
              },
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "3.5rem",
                },
                fontWeight: 900,
                mb: 3,
              }}
            >
              Ready To Work
              With Empire Security?
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                mb: 4,
              }}
            >
              Let's discuss how our team can support
              your organization, project or event.
            </Typography>
  
            <Button
              component={Link}
              to="/request-quote"
              variant="contained"
              sx={{
                background: "#d4af37",
                color: "#000",
                fontWeight: 700,
  
                "&:hover": {
                  background: "#f0c95e",
                },
              }}
            >
              Request A Consultation
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }