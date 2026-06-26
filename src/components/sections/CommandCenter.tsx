import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    Divider,
  } from "@mui/material";
  
  export default function CommandCenter() {
    return (
      <Box
        sx={{
          py: 14,
          background:
            "linear-gradient(180deg,#0b1220,#080d16)",
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
            EMPIRE COMMAND CENTER
          </Typography>
  
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontWeight: 900,
              mb: 3,
            }}
          >
            Security Operations
            Powered By Technology
          </Typography>
  
          <Typography
            sx={{
              textAlign: "center",
              color: "#94a3b8",
              maxWidth: 850,
              mx: "auto",
              mb: 8,
            }}
          >
            Real-time monitoring,
            officer management,
            incident reporting,
            dispatch coordination,
            and client visibility —
            all from a centralized platform.
          </Typography>
  
          <Grid
            container
            spacing={4}
          >
            {/* LEFT */}
            <Grid
              item
              xs={12}
              lg={5}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "28px",
  
                  background:
                    "rgba(255,255,255,.04)",
  
                  backdropFilter:
                    "blur(12px)",
  
                  border:
                    "1px solid rgba(255,255,255,.06)",
                }}
              >
                <Metric
                  label="Active Officers"
                  value="72"
                />
  
                <Divider sx={{ my: 2 }} />
  
                <Metric
                  label="Protected Sites"
                  value="45"
                />
  
                <Divider sx={{ my: 2 }} />
  
                <Metric
                  label="Open Incidents"
                  value="3"
                />
  
                <Divider sx={{ my: 2 }} />
  
                <Metric
                  label="Patrol Completion"
                  value="98%"
                />
              </Paper>
            </Grid>
  
            {/* RIGHT */}
            <Grid
              item
              xs={12}
              lg={7}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: "28px",
  
                  background:
                    "rgba(255,255,255,.04)",
  
                  border:
                    "1px solid rgba(255,255,255,.06)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                  }}
                >
                  Live Activity Feed
                </Typography>
  
                <Activity
                  time="2 min ago"
                  text="Officer Martinez completed patrol at Barclays Center."
                />
  
                <Activity
                  time="7 min ago"
                  text="Construction Site Alpha check-in completed."
                />
  
                <Activity
                  time="12 min ago"
                  text="Fire Guard inspection submitted."
                />
  
                <Activity
                  time="15 min ago"
                  text="VIP Escort assignment accepted."
                />
  
                <Activity
                  time="22 min ago"
                  text="Client incident report generated."
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
  
  function Metric({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography color="#94a3b8">
          {label}
        </Typography>
  
        <Typography
          sx={{
            color: "#d4af37",
            fontWeight: 800,
          }}
        >
          {value}
        </Typography>
      </Box>
    );
  }
  
  function Activity({
    time,
    text,
  }: {
    time: string;
    text: string;
  }) {
    return (
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            color: "#d4af37",
            fontSize: ".85rem",
            mb: .5,
          }}
        >
          {time}
        </Typography>
  
        <Typography
          sx={{
            color: "#cbd5e1",
          }}
        >
          {text}
        </Typography>
      </Box>
    );
  }