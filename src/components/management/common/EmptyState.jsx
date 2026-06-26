import { Box, Typography } from "@mui/material";

export default function EmptyState({ message }) {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography sx={{ color: "rgba(255,255,255,.55)" }}>
        {message}
      </Typography>
    </Box>
  );
}