import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    MenuItem,
    Paper,
    Stack,
    } from "@mui/material";
  
    import Stats from "../components/sections/Stats";
    import { Link } from "react-router-dom";
    import { useState } from "react";
    import { supabase } from "../lib/supabase";


      const fieldStyles = {
        "& .MuiOutlinedInput-root": {
          background: "rgba(255,255,255,.03)",
          backdropFilter: "blur(10px)",
          borderRadius: "14px",
          color: "#fff",
      
          "& fieldset": {
            borderColor: "rgba(212,175,55,.15)",
          },
      
          "&:hover fieldset": {
            borderColor: "rgba(212,175,55,.45)",
          },
      
          "&.Mui-focused fieldset": {
            borderColor: "#d4af37",
            borderWidth: "2px",
          },
        },
      
        "& .MuiInputBase-input": {
          color: "#fff",
        },
      
        "& .MuiInputLabel-root": {
          color: "#94a3b8",
        },
      
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#d4af37",
        },
      
        "& .MuiSvgIcon-root": {
          color: "#d4af37",
        },
      };
      
      const paperStyles = {
        background:
          "linear-gradient(145deg,#111827,#0b1220)",
      
        backdropFilter: "blur(20px)",
      
        border:
          "1px solid rgba(212,175,55,.15)",
      
        boxShadow:
          "0 20px 60px rgba(0,0,0,.35)",
      
        borderRadius: "28px",
      };
            

    export default function RequestQuotePage() {

        const [companyName, setCompanyName] = useState("");
        const [contactPerson, setContactPerson] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [serviceNeeded, setServiceNeeded] = useState("");
        const [serviceLocation, setServiceLocation] = useState("");
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [officersNeeded, setOfficersNeeded] = useState("");
        const [description, setDescription] = useState("");
        const [loading, setLoading] = useState(false);

        const handleSubmit = async () => {
            try {
              setLoading(true);
          
              const { error } = await supabase
                .from("quote_requests")
                .insert({
                  company_name: companyName,
                  contact_person: contactPerson,
                  email,
                  phone,
                  service_needed: serviceNeeded,
                  service_location: serviceLocation,
                  start_date: startDate || null,
                  end_date: endDate || null,
                  officers_needed: Number(officersNeeded),
                  project_description: description,
                });
          
              if (error) throw error;
          
              alert("Consultation request submitted successfully.");
          
              setCompanyName("");
              setContactPerson("");
              setEmail("");
              setPhone("");
              setServiceNeeded("");
              setServiceLocation("");
              setStartDate("");
              setEndDate("");
              setOfficersNeeded("");
              setDescription("");
          
            } catch (err) {
              console.error(err);
              alert("Unable to submit request.");
            } finally {
              setLoading(false);
            }
          };  

    return (
    <Box
    sx={{
    background: "#05070d",
    minHeight: "100vh",
    color: "#fff",
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
            PROFESSIONAL SECURITY SOLUTIONS
          </Typography>
    
          <Typography
            sx={{
              fontSize: {
                xs: "2.8rem",
                md: "4.5rem",
              },
              fontWeight: 900,
              lineHeight: 1.05,
              mb: 3,
            }}
          >
            Start Your
            <br />
            Security Consultation
          </Typography>
    
          <Typography
            sx={{
              color: "#94a3b8",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            From event security and executive
            protection to construction site
            coverage and fire guard services,
            Empire Security provides licensed
            professionals throughout New York.
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
            alignItems: "start",
          }}
        >
          {/* QUOTE FORM */}
    
            <Paper
            elevation={0}
            sx={{
                ...paperStyles,
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
              FREE CONSULTATION
            </Typography>
    
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 900,
                mb: 4,
                color: "#fff"
              }}
            >
              Tell Us About Your Needs
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
label="Company Name"
value={companyName}
onChange={(e) =>
setCompanyName(e.target.value)
}
fullWidth
sx={fieldStyles}
/>

<TextField
label="Contact Person"
value={contactPerson}
onChange={(e) =>
setContactPerson(e.target.value)
}
fullWidth
sx={fieldStyles}
/>

<TextField
label="Email Address"
value={email}
onChange={(e) =>
setEmail(e.target.value)
}
fullWidth
sx={fieldStyles}
/>

<TextField
label="Phone Number"
value={phone}
onChange={(e) =>
setPhone(e.target.value)
}
fullWidth
sx={fieldStyles}
/>


<TextField
label="Service Location"
value={serviceLocation}
onChange={(e) =>
setServiceLocation(e.target.value)
}
fullWidth
sx={fieldStyles}
/>

<TextField
label="Start Date"
type="date"
value={startDate}
onChange={(e) =>
setStartDate(e.target.value)
}
fullWidth
sx={fieldStyles}
InputLabelProps={{ shrink: true }}
/>

<TextField
label="End Date"
type="date"
value={endDate}
onChange={(e) =>
setEndDate(e.target.value)
}
fullWidth
sx={fieldStyles}
InputLabelProps={{ shrink: true }}
/>

<TextField
label="Number Of Officers"
type="number"
value={officersNeeded}
onChange={(e) =>
setOfficersNeeded(e.target.value)
}
fullWidth
sx={fieldStyles}
/>

<TextField
  select
  label="Service Needed"
  value={serviceNeeded}
  onChange={(e) =>
    setServiceNeeded(e.target.value)
  }
  fullWidth
  sx={fieldStyles}
>
  <MenuItem value="event">
    Event Security
  </MenuItem>

  <MenuItem value="construction">
    Construction Security
  </MenuItem>

  <MenuItem value="executive">
    Executive Protection
  </MenuItem>

  <MenuItem value="fireguard">
    Fire Guard Services
  </MenuItem>

  <MenuItem value="residential">
    Residential Security
  </MenuItem>

  <MenuItem value="corporate">
    Corporate Security
  </MenuItem>
</TextField>
    
    

            

            <TextField
              label="Describe Your Security Needs"
              multiline
              rows={5}
              fullWidth
              sx={fieldStyles}

              
            />
            </Box>
    
    
            <Button
  fullWidth
  size="large"
  variant="contained"
  onClick={handleSubmit}
  disabled={loading}
  sx={{
    mt: 4,
    background: "#d4af37",
    color: "#000",
    fontWeight: 800,
    py: 2,
    borderRadius: "16px",

    "&:hover": {
      background: "#f0c95e",
    },
  }}
>
  {loading
    ? "Submitting..."
    : "Start Consultation"}
</Button>
          </Paper>
    
          {/* SIDEBAR */}
    
          <Stack spacing={3}>
            {/* ACADEMY */}
    
            <Paper
                elevation={0}
                sx={{
                    ...paperStyles,
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
                EMPIRE TRAINING ACADEMY
              </Typography>
    
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  mb: 3,
                  color:"#fff"
                }}
              >
                Start Your
                Security Career
              </Typography>
    
              <Typography
                sx={{
                  color: "#94a3b8",
                  mb: 4,
                }}
              >
                Become a licensed New York
                Security Officer through our
                professional training programs.
              </Typography>
    
              <Stack spacing={1.5}
             sx={{
                color: "#94a3b8",
                mb: 4,
              }}
                        
                            >
                <Typography
                  sx={{
                    color: "#94a3b8",
                    mb: 4,
                  }}
                >
                  ✓ 8 Hour Pre Assignment
                </Typography>
    
                <Typography>
                  ✓ 16 Hour OJT
                </Typography>
    
                <Typography>
                  ✓ Annual Training
                </Typography>
    
                <Typography>
                  ✓ Fire Guard Courses
                </Typography>
    
                <Typography>
                  ✓ Job Placement Assistance
                </Typography>
              </Stack>
    
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
    
            {/* EMERGENCY */}
    
            <Paper
              elevation={0}
              sx={{
                  ...paperStyles,
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
                  mb: 2,
                }}
              >
                NEED SECURITY FAST?
              </Typography>
    
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: "1.8rem",
                  mb: 2,
                  color:"#fff"
                }}
              >
                24/7 Dispatch
              </Typography>
    
              <Typography
                sx={{
                  color: "#94a3b8",
                  mb: 3,
                }}
              >
                Immediate assistance for
                events, construction sites and
                emergency security needs.
              </Typography>
    
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: "#d4af37",
                  color: "#d4af37",
                }}
              >
                Call Now
              </Button>
            </Paper>
          </Stack>
        </Box>
      </Container>
      <Stats />

    </Box>
    
    
    );
    }
    