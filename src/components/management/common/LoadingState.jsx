import { Box, CircularProgress } from "@mui/material";

export default function LoadingState() {
  return (
    <Box sx={{ height: 400, display: "grid", placeItems: "center" }}>
      <CircularProgress />
    </Box>
  );
}