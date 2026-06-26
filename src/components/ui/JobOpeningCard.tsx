import {
    Paper,
    Typography,
    Button,
    Chip,
    Stack,
  } from "@mui/material";


interface Props {
    title: string;
    location: string;
    type: string;
    pay: string;
    onApply: (title: string) => void;
    }
    
    export default function JobOpeningCard({
    title,
    location,
    type,
    pay,
    onApply,
    }: Props) {
    return (
    <Paper
    elevation={0}
    sx={{
    p: 4,
    borderRadius: "24px",
    background:
    "linear-gradient(145deg,#111827,#0b1220)",
    border:
    "1px solid rgba(255,255,255,.06)",
    transition: ".3s ease",
    
    
        "&:hover": {
          transform: "translateY(-8px)",
          border:
            "1px solid rgba(212,175,55,.4)",
          boxShadow:
            "0 20px 60px rgba(212,175,55,.15)",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,
          mb: 2,
          color: "#fff"
        }}
      >
        {title}
      </Typography>
    
      <Stack
        direction="row"
        spacing={1}
        sx={{ mb: 3,}}
      >
        <Chip label={location} size="small" 
        sx={{ 
            color:"#05070d",
            background:"#d4af37"}} />
        <Chip label={type} size="small" 
         sx={{ 
            color:"#05070d",
            background:"#d4af37"}}/>
      </Stack>
    
      <Typography
        sx={{
          color: "#94a3b8",
          mb: 3,
        }}
      >
        {pay}
      </Typography>
    
      <Button
        fullWidth
        variant="contained"
        onClick={() => onApply(title)}
        sx={{
          background: "#d4af37",
          color: "#000",
          fontWeight: 700,
          borderRadius: "14px",
        }}
      >
        Apply Now
      </Button>
    </Paper>
    
    
    );
    }
    