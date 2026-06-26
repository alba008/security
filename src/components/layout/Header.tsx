import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
AppBar,
Toolbar,
Box,
Button,
Container,
Typography,
IconButton,
Drawer,
Stack,
} from "@mui/material";

import SecurityIcon from "@mui/icons-material/Security";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
{ label: "Home", path: "/" },
{ label: "Services", path: "/services" },
{ label: "Academy", path: "/academy" },
{ label: "Leadership", path: "/leadership" },
{ label: "Careers", path: "/careers" },
{ label: "Contact", path: "/contact" },
];

export default function Header() {
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] =
useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 40);
};


window.addEventListener(
  "scroll",
  handleScroll
);

return () =>
  window.removeEventListener(
    "scroll",
    handleScroll
  );


}, []);

return (
<>
<AppBar
elevation={0}
sx={{
background: scrolled
? "rgba(5,7,13,.92)"
: "transparent",


      backdropFilter: scrolled
        ? "blur(18px)"
        : "none",

      borderBottom: scrolled
        ? "1px solid rgba(255,255,255,.06)"
        : "none",

      transition: ".3s ease",
    }}
  >
    <Container maxWidth="xl">
      <Toolbar
        disableGutters
        sx={{
          justifyContent:
            "space-between",
          py: 1.5,
        }}
      >
        {/* LOGO */}

        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
          }}
        >
          <SecurityIcon
            sx={{
              color: "#d4af37",
              fontSize: 34,
            }}
          />

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,

              fontSize: {
                xs: ".95rem",
                md: "1.15rem",
              },

              letterSpacing: 1,
            }}
          >
            EMPIRE SECURITY
          </Typography>
        </Box>

        {/* DESKTOP NAV */}

        <Stack
          direction="row"
          spacing={4}
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "#fff",
                position: "relative",

                "&:hover": {
                  color: "#d4af37",
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        {/* RIGHT SIDE */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            component={Link}
            to="/request-quote"
            variant="contained"
            sx={{
              background: "#d4af37",
              color: "#000",
              fontWeight: 700,

              borderRadius: "14px",

              px: {
                xs: 2,
                md: 3,
              },

              "&:hover": {
                background: "#f0c95e",
              },
            }}
          >
            Quote
          </Button>

          {/* MOBILE MENU */}

          <IconButton
            onClick={() =>
              setMobileOpen(true)
            }
            sx={{
              color: "#fff",

              display: {
                xs: "flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>

  {/* MOBILE DRAWER */}

  <Drawer
    anchor="right"
    open={mobileOpen}
    onClose={() =>
      setMobileOpen(false)
    }
    PaperProps={{
      sx: {
        width: 320,
        background: "#05070d",
        color: "#fff",
      },
    }}
  >
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            color: "#d4af37",
          }}
        >
          MENU
        </Typography>

        <IconButton
          onClick={() =>
            setMobileOpen(false)
          }
          sx={{
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack spacing={3}>
        {navItems.map((item) => (
          <Typography
            key={item.label}
            component={Link}
            to={item.path}
            onClick={() =>
              setMobileOpen(false)
            }
            sx={{
              textDecoration: "none",
              color: "#fff",
              fontSize: "1.1rem",

              "&:hover": {
                color: "#d4af37",
              },
            }}
          >
            {item.label}
          </Typography>
        ))}
      </Stack>

      <Box sx={{ mt: 5 }}>
        <Button
          component={Link}
          to="/careers"
          fullWidth
          variant="outlined"
          sx={{
            mb: 2,
            borderColor: "#d4af37",
            color: "#d4af37",
          }}
        >
          Join Our Team
        </Button>

        <Button
          component={Link}
          to="/request-quote"
          fullWidth
          variant="contained"
          sx={{
            background: "#d4af37",
            color: "#000",
            fontWeight: 700,
          }}
        >
          Request A Quote
        </Button>
      </Box>
    </Box>
  </Drawer>
</>


);
}
