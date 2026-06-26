import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";

export default function ContactDetails({ record, statuses, updateRecord }) {
  return (
    <Box sx={wrap}>
      <Typography sx={sectionTitle}>Contact Message</Typography>

      <Info label="Full Name" value={record.full_name} />
      <Info label="Email" value={record.email} />
      <Info label="Phone" value={record.phone} />
      <Info label="Subject" value={record.subject} />
      <Info label="Message" value={record.message} />
      <Info label="Created" value={formatDate(record.created_at)} />

      <Stack spacing={2} sx={{ mt: 3 }}>
        <TextField
          select
          label="Status"
          value={record.status || "NEW"}
          onChange={(e) => updateRecord(record.id, { status: e.target.value })}
          sx={field}
        >
          {statuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </Box>
  );
}

function Info({ label, value }) {
  return (
    <Box sx={{ mb: 1.6 }}>
      <Typography sx={labelStyle}>{label}</Typography>
      <Typography sx={valueStyle}>{value || "N/A"}</Typography>
    </Box>
  );
}

function formatDate(date) {
  if (!date) return "N/A";
  return new Date(date).toLocaleDateString();
}

const wrap = { p: 3 };
const sectionTitle = { color: "#d4af37", fontWeight: 900, mb: 2 };
const labelStyle = { color: "rgba(255,255,255,.45)", fontSize: 12 };
const valueStyle = { color: "#fff", fontWeight: 700 };
const field = {
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,.55)" },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    background: "rgba(255,255,255,.04)",
    borderRadius: 3,
  },
};