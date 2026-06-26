import {
    Box,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Stack,
  } from "@mui/material";
  
  export default function ContactPage() {
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
              CONTACT US
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
              Let's Discuss
              Your Security Needs
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Speak with our team about security
              coverage, staffing solutions, emergency
              deployment and long-term protection plans.
            </Typography>
          </Container>
        </Box>
  
        {/* CONTENT */}
  
        <Container
          maxWidth="xl"
          sx={{
            pb: 12,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.4fr .8fr",
              },
              gap: 4,
            }}
          >
            {/* FORM */}
  
            <Paper
              elevation={0}
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },
              }}
            >
              <Typography
                sx={{
                  color: "#d4af37",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                SEND A MESSAGE
              </Typography>
  
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  mb: 4,
                }}
              >
                Contact Empire Security
              </Typography>
  
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "1fr 1fr",
                  },
                  gap: 3,
                }}
              >
                <TextField
                  label="First Name"
                  fullWidth
                />
  
                <TextField
                  label="Last Name"
                  fullWidth
                />
  
                <TextField
                  label="Email Address"
                  fullWidth
                />
  
                <TextField
                  label="Phone Number"
                  fullWidth
                />
              </Box>
  
              <TextField
                label="Subject"
                fullWidth
                sx={{ mt: 3 }}
              />
  
              <TextField
                label="How Can We Help?"
                multiline
                rows={6}
                fullWidth
                sx={{ mt: 3 }}
              />
  
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  mt: 4,
                  background: "#d4af37",
                  color: "#000",
                  fontWeight: 800,
                  py: 2,
                }}
              >
                Send Message
              </Button>
            </Paper>
  
            {/* SIDEBAR */}
  
            <Stack spacing={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "#d4af37",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  OFFICE
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                    mb: 1,
                  }}
                >
                  New York, NY
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                    mb: 1,
                  }}
                >
                  info@empiresecurityny.com
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                  }}
                >
                  (212) 320-8988
                </Typography>
              </Paper>
  
              <Paper
                elevation={0}
                sx={{
                  p: 4,
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
                  24/7 DISPATCH
                </Typography>
  
                <Typography
                  sx={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    mb: 2,
                  }}
                >
                  Immediate Response
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                    mb: 4,
                  }}
                >
                  Need officers immediately?
                  Contact dispatch for rapid deployment.
                </Typography>
  
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    background: "#d4af37",
                    color: "#000",
                  }}
                >
                  Call Dispatch
                </Button>
              </Paper>
  
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "#d4af37",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  BUSINESS HOURS
                </Typography>
  
                <Typography color="#94a3b8">
                  Monday - Friday
                </Typography>
  
                <Typography color="#fff">
                  8:00 AM - 6:00 PM
                </Typography>
  
                <Typography
                  sx={{
                    mt: 3,
                    color: "#94a3b8",
                  }}
                >
                  Emergency Security Services
                </Typography>
  
                <Typography color="#fff">
                  Available 24/7
                </Typography>
              </Paper>
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  }