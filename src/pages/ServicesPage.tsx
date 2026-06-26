import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Stack,
  } from "@mui/material";
  
  import {
    Security,
    Engineering,
    Shield,
    LocalFireDepartment,
    Home,
    Business,
  } from "@mui/icons-material";
  
  import { Link } from "react-router-dom";
  
  const services = [
    {
      title: "Event Security",
      icon: <Security />,
      description:
        "Professional officers for concerts, festivals, private events and corporate functions.",
    },
    {
      title: "Construction Security",
      icon: <Engineering />,
      description:
        "24/7 site monitoring, access control and equipment protection.",
    },
    {
      title: "Executive Protection",
      icon: <Shield />,
      description:
        "VIP security services for executives, public figures and high-profile clients.",
    },
    {
      title: "Fire Guard Services",
      icon: <LocalFireDepartment />,
      description:
        "Licensed F01, F03 and fire watch personnel available around the clock.",
    },
    {
      title: "Residential Security",
      icon: <Home />,
      description:
        "Building security, patrols and concierge protection services.",
    },
    {
      title: "Corporate Security",
      icon: <Business />,
      description:
        "Office security, access control and employee safety solutions.",
    },
  ];
  
  export default function ServicesPage() {
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
            pb: 12,
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
              PROFESSIONAL SECURITY SERVICES
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
              Security Solutions
              <br />
              Built Around Your Needs
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Empire Security provides licensed,
              professional protection services for
              businesses, events, construction sites,
              residential communities and executive clients
              throughout New York.
            </Typography>
          </Container>
        </Box>
  
        {/* SERVICES GRID */}
  
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
                lg: "repeat(3,1fr)",
              },
              gap: 4,
            }}
          >
            {services.map((service) => (
              <Paper
                key={service.title}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(145deg,#111827,#0b1220)",
                  border:
                    "1px solid rgba(255,255,255,.06)",
  
                  transition: ".3s",
  
                  "&:hover": {
                    transform: "translateY(-8px)",
                    border:
                      "1px solid rgba(212,175,55,.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "#d4af37",
                    mb: 3,
  
                    "& svg": {
                      fontSize: 42,
                    },
                  }}
                >
                  {service.icon}
                </Box>
  
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    mb: 2,
                  }}
                >
                  {service.title}
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                  }}
                >
                  {service.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
  
        {/* INDUSTRIES */}
  
        <Container
          maxWidth="xl"
          sx={{
            py: 14,
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
            }}
          >
            INDUSTRIES WE SERVE
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
            Trusted Across
            Multiple Industries
          </Typography>
  
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4,1fr)",
              },
              gap: 3,
            }}
          >
            {[
              "Construction",
              "Healthcare",
              "Hospitality",
              "Retail",
              "Residential",
              "Corporate",
              "Government",
              "Special Events",
            ].map((industry) => (
              <Paper
                key={industry}
                elevation={0}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: "20px",
                  background:
                    "rgba(255,255,255,.03)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {industry}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
  
        {/* PROCESS */}
  
        <Container
          maxWidth="xl"
          sx={{
            pb: 14,
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
            }}
          >
            HOW WE WORK
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
            Simple & Effective
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
            {[
              "Consultation",
              "Security Assessment",
              "Officer Deployment",
              "Ongoing Support",
            ].map((step, index) => (
              <Paper
                key={step}
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  textAlign: "center",
                  background:
                    "linear-gradient(145deg,#111827,#0b1220)",
                }}
              >
                <Typography
                  sx={{
                    color: "#d4af37",
                    fontSize: "2rem",
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  {index + 1}
                </Typography>
  
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {step}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
  
        {/* ACADEMY CTA */}
  
        <Container
          maxWidth="lg"
          sx={{
            pb: 14,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              borderRadius: "30px",
              textAlign: "center",
  
              background:
                "linear-gradient(145deg,#111827,#0b1220)",
  
              border:
                "1px solid rgba(212,175,55,.15)",
            }}
          >
            <Typography
              sx={{
                color: "#d4af37",
                fontWeight: 700,
                mb: 2,
              }}
            >
              EMPIRE TRAINING ACADEMY
            </Typography>
  
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                fontWeight: 900,
                mb: 3,
              }}
            >
              Need Licensed Security Officers?
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                mb: 4,
              }}
            >
              Empire Academy trains and certifies
              future security professionals while helping
              employers find qualified talent.
            </Typography>
  
            <Button
              component={Link}
              to="/academy"
              variant="contained"
              sx={{
                background: "#d4af37",
                color: "#000",
                fontWeight: 700,
              }}
            >
              Visit Academy
            </Button>
          </Paper>
        </Container>
  
        {/* FINAL CTA */}
  
        <Container
          maxWidth="lg"
          sx={{
            pb: 14,
          }}
        >
          <Box textAlign="center">
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "4rem",
                },
                fontWeight: 900,
                mb: 3,
              }}
            >
              Ready To Secure
              Your Property,
              Project Or Event?
            </Typography>
  
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                to="/request-quote"
                variant="contained"
                sx={{
                  background: "#d4af37",
                  color: "#000",
                }}
              >
                Request A Quote
              </Button>
  
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{
                  borderColor: "#d4af37",
                  color: "#d4af37",
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  }