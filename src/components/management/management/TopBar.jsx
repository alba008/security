import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function TopBar({ title, search, setSearch, onRefresh }) {
  return (
    <Box sx={wrap}>
      <Box>
        <Typography sx={eyebrow}>Management Console</Typography>
        <Typography sx={titleStyle}>{title}</Typography>
      </Box>

      <Box sx={actions}>
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search records..."
          size="small"
          sx={field}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgba(255,255,255,.45)" }} />
              </InputAdornment>
            ),
          }}
        />

        <Button startIcon={<RefreshIcon />} onClick={onRefresh} sx={goldButton}>
          Refresh
        </Button>
      </Box>
    </Box>
  );
}

const wrap = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: { xs: "flex-start", md: "center" },
  flexDirection: { xs: "column", md: "row" },
  gap: 2,
  mb: 3,
};

const eyebrow = {
  color: "#d4af37",
  fontSize: 12,
  fontWeight: 900,
  letterSpacing: ".16em",
  textTransform: "uppercase",
};

const titleStyle = {
  color: "#fff",
  fontSize: 34,
  fontWeight: 950,
};

const actions = {
  display: "flex",
  gap: 2,
  width: { xs: "100%", md: "auto" },
};

const field = {
  minWidth: { xs: "100%", md: 320 },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    background: "rgba(255,255,255,.04)",
    borderRadius: 3,
    "& fieldset": {
      borderColor: "rgba(255,255,255,.12)",
    },
  },
};

const goldButton = {
  background: "#d4af37",
  color: "#000",
  fontWeight: 900,
  borderRadius: 3,
  px: 2,
  "&:hover": {
    background: "#f0c94d",
  },
};