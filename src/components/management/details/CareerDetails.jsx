import { Box, Button, Chip, MenuItem, Stack, TextField, Typography } from "@mui/material";

export default function CareerDetails({ record, statuses, updateRecord }) {
  return (
    <Box sx={wrap}>
      <Typography sx={sectionTitle}>Career Application</Typography>

      <Info label="Applicant" value={`${record.first_name || ""} ${record.last_name || ""}`} />
      <Info label="Email" value={record.email} />
      <Info label="Phone" value={record.phone} />
      <Info label="Position Applied" value={record.position_applied} />
      <Info label="Years Experience" value={record.years_of_experience} />
      <Info label="Security License" value={record.security_license_number} />
      <Info label="Current Employer" value={record.current_employer} />
      <Info label="Experience Summary" value={record.experience_summary} />

      <Typography sx={sectionTitle}>Eligibility</Typography>
      <Bool label="Authorized To Work" value={record.authorized_to_work} />
      <Bool label="Background Check" value={record.background_check} />
      <Bool label="Reliable Transportation" value={record.reliable_transportation} />
      <Bool label="Valid Driver License" value={record.valid_driver_license} />

      <Typography sx={sectionTitle}>Certifications</Typography>
      <Info label="Certificates" value={Array.isArray(record.certificates) ? record.certificates.join(", ") : "N/A"} />
      <Info label="Pre Assignment Expiry" value={record.pre_assignment_expiry} />
      <Info label="16HR OJT Expiry" value={record.ojt_16hr_expiry} />
      <Info label="Annual 8HR Expiry" value={record.annual_8hr_expiry} />
      <Info label="F01 Expiry" value={record.f01_expiry} />
      <Info label="F03 Expiry" value={record.f03_expiry} />
      <Info label="CPR Expiry" value={record.cpr_expiry} />
      <Info label="First Aid Expiry" value={record.first_aid_expiry} />

      <Stack spacing={1.5} sx={{ my: 3 }}>
        {record.resume_url && <Button href={record.resume_url} target="_blank" sx={goldButton}>View Resume</Button>}
        {record.security_license_url && <Button href={record.security_license_url} target="_blank" sx={goldButton}>View Security License</Button>}
        {record.driver_license_url && <Button href={record.driver_license_url} target="_blank" sx={goldButton}>View Driver License</Button>}
        {record.certifications_url && <Button href={record.certifications_url} target="_blank" sx={goldButton}>View Certifications</Button>}
      </Stack>

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
          label="Recruiter Notes"
          multiline
          minRows={5}
          value={record.recruiter_notes || ""}
          onChange={(e) => updateRecord(record.id, { recruiter_notes: e.target.value })}
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

function Bool({ label, value }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.2 }}>
      <Typography sx={labelStyle}>{label}</Typography>
      <Chip
        label={value ? "Yes" : "No"}
        size="small"
        sx={{
          background: value ? "rgba(34,197,94,.16)" : "rgba(239,68,68,.16)",
          color: value ? "#86efac" : "#fca5a5",
          fontWeight: 800,
        }}
      />
    </Box>
  );
}

const wrap = { p: 3 };
const sectionTitle = { color: "#d4af37", fontWeight: 900, mb: 2, mt: 2 };
const labelStyle = { color: "rgba(255,255,255,.45)", fontSize: 12 };
const valueStyle = { color: "#fff", fontWeight: 700 };
const goldButton = {
  background: "#d4af37",
  color: "#000",
  fontWeight: 900,
  "&:hover": { background: "#f0c94d" },
};
const field = {
  "& .MuiInputLabel-root": { color: "rgba(255,255,255,.55)" },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    background: "rgba(255,255,255,.04)",
    borderRadius: 3,
  },
};