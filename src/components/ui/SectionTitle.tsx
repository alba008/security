import { Typography, Box } from "@mui/material";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <Box mb={8}>
      <Typography
        sx={{
          color: "#d4af37",
          fontWeight: 700,
          letterSpacing: 2,
          mb: 2,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "2.5rem",
            md: "4rem",
          },
          fontWeight: 900,
          lineHeight: 1.1,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          sx={{
            color: "#94a3b8",
            maxWidth: 800,
            fontSize: "1.1rem",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}