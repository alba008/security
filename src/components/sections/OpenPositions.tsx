
import {
    Box,
    Container,
    Typography,
  } from "@mui/material";
  
  import JobOpeningCard from "../ui/JobOpeningCard";
  
interface Props {
    onApply: (title: string) => void;
    }
    
    export default function OpenPositions({
    onApply,
    }: Props) {
    const jobs = [
    {
    title: "Security Officer",
    location: "Manhattan",
    type: "Full Time",
    pay: "$18 - $25/hr",
    },
    {
    title: "Fire Guard F01/F03",
    location: "Bronx",
    type: "Full Time",
    pay: "Competitive Pay",
    },
    {
    title: "Event Security Officer",
    location: "NYC",
    type: "Flexible",
    pay: "Weekend Opportunities",
    },
    {
    title: "Executive Protection Agent",
    location: "NYC",
    type: "Full Time",
    pay: "Premium Assignments",
    },
    ];
    
    return (
    <Box sx={{ py: 10 }}> <Container maxWidth="xl">
    <Typography
    sx={{
    color: "#d4af37",
    textAlign: "center",
    fontWeight: 700,
    mb: 2,
    }}
    >
    OPEN POSITIONS </Typography>
    
    
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "2rem",
              md: "3.5rem",
            },
            fontWeight: 900,
            mb: 8,
          }}
        >
          Current Opportunities
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
          {jobs.map((job) => (
            <JobOpeningCard
              key={job.title}
              {...job}
              onApply={onApply}
            />
          ))}
        </Box>
      </Container>
    </Box>

    
    );
    }
    