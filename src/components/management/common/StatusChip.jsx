import { Chip } from "@mui/material";

export default function StatusChip({ status }) {
  const value = status || "NEW";

  return (
    <Chip
      label={value}
      size="small"
      sx={{
        background: "rgba(212,175,55,.16)",
        color: "#f5d76e",
        fontWeight: 900,
        borderRadius: "999px",
      }}
    />
  );
}