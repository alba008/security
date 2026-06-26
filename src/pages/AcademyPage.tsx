import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
  } from "@mui/material";
  
  import {
    School,
    WorkspacePremium,
    Security,
    LocalFireDepartment,
  } from "@mui/icons-material";
  
  import { Link } from "react-router-dom";
  
  const programs = [
    {
      title: "8 Hour Pre-Assignment Training",
      icon: <School />,
      description:
        "Required introductory training for individuals entering the security industry.",
    },
    {
      title: "16 Hour On-The-Job Training",
      icon: <WorkspacePremium />,
      description:
        "Advanced practical training designed to prepare officers for field assignments.",
    },
    {
      title: "Annual Security Training",
      icon: <Security />,
      description:
        "Maintain compliance and enhance professional security skills through yearly certification.",
    },
    {
      title: "Fire Guard Certification",
      icon: <LocalFireDepartment />,
      description:
        "Prepare for F01, F03 and fire watch assignments with specialized training programs.",
    },
  ];
  
  export default function AcademyPage() {
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
              EMPIRE TRAINING ACADEMY
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
              Start Your Career
              In Security
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Professional training programs designed
              to help future security officers gain
              certification, employment opportunities
              and long-term career growth.
            </Typography>
          </Container>
        </Box>
  
        {/* PROGRAMS */}
  
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
            TRAINING PROGRAMS
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
            Certification Courses
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
            {programs.map((program) => (
              <Paper
                key={program.title}
                elevation={0}
                sx={{
                  p: 5,
                  transition: ".3s",
  
                  "&:hover": {
                    transform: "translateY(-6px)",
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
                  {program.icon}
                </Box>
  
                <Typography
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  {program.title}
                </Typography>
  
                <Typography
                  sx={{
                    color: "#94a3b8",
                    lineHeight: 1.8,
                  }}
                >
                  {program.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
  
        {/* BENEFITS */}
  
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
            WHY CHOOSE US
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
            Academy Benefits
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
              "Licensed Instructors",
              "Flexible Scheduling",
              "Job Placement Assistance",
              "Career Growth Support",
            ].map((item) => (
              <Paper
                key={item}
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  {item}
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
              Ready To Begin?
            </Typography>
  
            <Typography
              sx={{
                color: "#94a3b8",
                mb: 4,
              }}
            >
              Join Empire Training Academy and take
              the first step toward a rewarding
              security career.
            </Typography>
  
            <Button
              component={Link}
              to="/contact"
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
              Enroll Today
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }