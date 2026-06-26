import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    IconButton,
    } from "@mui/material";
    
    import {
    LinkedIn,
    Facebook,
    Instagram,
    Security,
    School,
    Phone,
    Email,
    LocationOn,
    } from "@mui/icons-material";
    
    import { Link } from "react-router-dom";
    
    export default function Footer() {
    return (
    <Box
    component="footer"
    sx={{
    background: "#02040a",
    borderTop: "1px solid rgba(255,255,255,.06)",
    mt: 10,
    }}
    > <Container maxWidth="xl">
    {/* CTA SECTION */}
    
   
        <Box
          sx={{
            py: {
              xs: 8,
              md: 10,
            },
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#d4af37",
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
            }}
          >
            READY TO GET STARTED?
          </Typography>
    
          <Typography
            sx={{
              fontSize: {
                xs: "2.2rem",
                md: "4rem",
              },
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Protect What Matters Most
          </Typography>
    
          <Typography
            sx={{
              color: "#94a3b8",
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >
            Empire Security provides licensed,
            professional security services
            throughout New York for businesses,
            events, construction sites, residential
            properties and executive protection.
          </Typography>
    
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              component={Link}
              to="/request-quote"
              variant="contained"
              size="large"
              sx={{
                background: "#d4af37",
                color: "#000",
                fontWeight: 700,
                minWidth: 220,
                borderRadius: "14px",
    
                "&:hover": {
                  background: "#f0c95e",
                },
              }}
            >
              Request A Quote
            </Button>
    
            <Button
              component={Link}
              to="/careers"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#d4af37",
                color: "#d4af37",
                minWidth: 220,
                borderRadius: "14px",
    
                "&:hover": {
                  borderColor: "#f0c95e",
                  background:
                    "rgba(212,175,55,.08)",
                },
              }}
            >
              Join Our Team
            </Button>
          </Stack>
        </Box>
    
        {/* MAIN FOOTER */}
    
        <Box
          sx={{
            py: 8,
            borderTop:
              "1px solid rgba(255,255,255,.06)",
    
            display: "grid",
    
            gridTemplateColumns: {
              xs: "1fr",
              md: "2fr 1fr 1fr 1.2fr",
            },
    
            gap: 5,
          }}
        >
          {/* COMPANY */}
    
          <Box>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <Security
                sx={{
                  color: "#d4af37",
                }}
              />
    
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "1.4rem",
                }}
              >
                EMPIRE SECURITY
              </Typography>
            </Stack>
    
            <Typography
              sx={{
                color: "#94a3b8",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 420,
              }}
            >
              Licensed, insured and trusted by
              businesses, construction companies,
              event organizers and property managers
              throughout New York.
            </Typography>
    
            <Stack
              direction="row"
              spacing={1}
            >
              <IconButton
                sx={{
                  color: "#d4af37",
                }}
              >
                <LinkedIn />
              </IconButton>
    
              <IconButton
                sx={{
                  color: "#d4af37",
                }}
              >
                <Facebook />
              </IconButton>
    
              <IconButton
                sx={{
                  color: "#d4af37",
                }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Box>
    
          {/* SERVICES */}
    
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              Services
            </Typography>
    
            <Stack spacing={1.5}>
              <FooterLink text="Event Security" />
              <FooterLink text="Construction Security" />
              <FooterLink text="Executive Protection" />
              <FooterLink text="Fire Guard Services" />
              <FooterLink text="Residential Security" />
            </Stack>
          </Box>
    
          {/* QUICK LINKS */}
    
          <Box>
  <Typography
    sx={{
      fontWeight: 800,
      mb: 3,
      color: "#fff",
    }}
  >
    Navigation
  </Typography>

  <Stack spacing={1.5}>
    <FooterRoute
      to="/"
      text="Home"
    />

    <FooterRoute
      to="/services"
      text="Services"
    />

    <FooterRoute
      to="/leadership"
      text="Leadership"
    />

    <FooterRoute
      to="/academy"
      text="Academy"
    />

    <FooterRoute
      to="/careers"
      text="Careers"
    />

    <FooterRoute
      to="/contact"
      text="Contact"
    />

    <FooterRoute
      to="/request-quote"
      text="Request Quote"
    />
  </Stack>
</Box>
    
          {/* TRAINING + CONTACT */}
    
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              Empire Academy
            </Typography>
    
            <Typography
              sx={{
                color: "#94a3b8",
                mb: 2,
              }}
            >
              Security training, licensing and
              career development programs.
            </Typography>

                        <Button
            startIcon={<School />}
            component="a"
            href="http://127.0.0.1:8000/"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            fullWidth
            sx={{
                mb: 4,
                borderColor: "#d4af37",
                color: "#d4af37",

                "&:hover": {
                borderColor: "#f0c95e",
                background: "rgba(212,175,55,.08)",
                },
            }}
            >
  Visit Academy
</Button>
    
            <Stack spacing={1.5}>
              <ContactRow
                icon={<LocationOn />}
                text="New York, NY"
              />
    
              <ContactRow
                icon={<Email />}
                text="info@empiresecurityny.com"
              />
    
              <ContactRow
                icon={<Phone />}
                text="(212) 320-8988"
              />
            </Stack>
          </Box>
        </Box>
    
        {/* COPYRIGHT */}
    
        <Box
          sx={{
            py: 3,
            borderTop:
              "1px solid rgba(255,255,255,.06)",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#64748b",
              fontSize: ".95rem",
            }}
          >
            © 2026 Empire Security New York.
            All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
 
    
    );
    }
    
    function FooterLink({
    text,
    }: {
    text: string;
    }) {
    return (
    <Typography
    sx={{
    color: "#94a3b8",
    cursor: "pointer",
    
    
        "&:hover": {
          color: "#d4af37",
        },
      }}
    >
      {text}
    </Typography>
  
    
    );
    }
    
    function FooterRoute({
    text,
    to,
    }: {
    text: string;
    to: string;
    }) {
    return (
    <Typography
    component={Link}
    to={to}
    sx={{
    textDecoration: "none",
    color: "#94a3b8",
    
  
        "&:hover": {
          color: "#d4af37",
        },
      }}
    >
      {text}
    </Typography>
   
    
    );
    }
    
    function ContactRow({
    icon,
    text,
    }: {
    icon: React.ReactNode;
    text: string;
    }) {
    return ( <Stack
       direction="row"
       spacing={1}
       alignItems="center"
     >
    <Box
    sx={{
    color: "#d4af37",
    display: "flex",
    }}
    >
    {icon} </Box>
    
   
      <Typography
        sx={{
          color: "#94a3b8",
        }}
      >
        {text}
      </Typography>
    </Stack>
   
    
    );
    }
    