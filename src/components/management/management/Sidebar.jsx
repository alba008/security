import { Box, Button, Typography } from "@mui/material";

export default function Sidebar({ active, modules, onChange }) {
  return (
    <Box sx={sidebar}>
      <Typography sx={brand}>Empire Admin</Typography>

      {Object.entries(modules).map(([key, item]) => (
        <Button
          key={key}
          fullWidth
          onClick={() => onChange(key)}
          sx={active === key ? activeButton : button}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}

const sidebar = {
  mt:10,
  p: 3,
  borderRight: "1px solid rgba(255,255,255,.08)",
  background: "rgba(255,255,255,.025)",
};

const brand = {
  color: "#d4af37",
  fontWeight: 950,
  fontSize: 22,
  mb: 4,
};

const button = {
  justifyContent: "flex-start",
  color: "rgba(255,255,255,.65)",
  borderRadius: 3,
  py: 1.2,
  mb: 1,
  textTransform: "none",
};

const activeButton = {
  ...button,
  background: "#d4af37",
  color: "#000",
  fontWeight: 900,
  "&:hover": {
    background: "#f0c94d",
  },
};