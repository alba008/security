import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";

export default function QuoteDetails({ record, statuses, updateRecord }) {
  return (
    <Box sx={wrap}>
      <Typography sx={sectionTitle}>Quote Request</Typography>

      <Info label="Company" value={record.company_name} />
      <Info label="Contact Person" value={record.contact_person} />
      <Info label="Email" value={record.email} />
      <Info label="Phone" value={record.phone} />
      <Info label="Service Needed" value={record.service_needed} />
      <Info label="Location" value={record.service_location} />
      <Info label="Dates" value={`${record.start_date || "N/A"} → ${record.end_date || "N/A"}`} />
      <Info label="Officers Needed" value={record.officers_needed} />
      <Info label="Description" value={record.project_description} />

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

        <TextField
          label="Assigned To"
          value={record.assigned_to || ""}
          onChange={(e) => updateRecord(record.id, { assigned_to: e.target.value })}
          sx={field}
        />

        <TextField
          label="Internal Notes"
          multiline
          minRows={5}
          value={record.internal_notes || ""}
          onChange={(e) => updateRecord(record.id, { internal_notes: e.target.value })}
          sx={field}
        />
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