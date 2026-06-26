import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Stack,
  TextField,
  MenuItem,
  Chip,
  Alert,
} from "@mui/material";

import OpenPositions from "../components/sections/OpenPositions";
import { supabase } from "../lib/supabase";

const BUCKET_NAME = "career-documents";

const certificateOptions = [
  "8 Hour Pre Assignment",
  "16 Hour OJT",
  "8 Hour Annual",
  "F01 Fire Guard",
  "F03 Fire Guard",
  "CPR",
  "First Aid",
];

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street_address: "",
  city: "",
  state: "",
  zip_code: "",

  authorized_to_work: "",
  background_check: "",
  reliable_transportation: "",
  valid_driver_license: "",

  security_license_number: "",
  years_of_experience: "",
  current_employer: "",

  certificates: [],

  pre_assignment_expiry: "",
  ojt_16hr_expiry: "",
  annual_8hr_expiry: "",
  f01_expiry: "",
  f03_expiry: "",
  cpr_expiry: "",
  first_aid_expiry: "",

  resume_file: null,
  security_license_file: null,
  driver_license_file: null,
  certifications_file: null,

  experience_summary: "",
};

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState("");
  const [showQualification, setShowQualification] = useState(false);
  const [showApplication, setShowApplication] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleApply = (position) => {
    setSelectedPosition(position);
    setShowQualification(true);
    setShowApplication(false);
    setSuccess("");
    setErrorMsg("");

    setTimeout(() => {
      document.getElementById("qualification-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleCertificate = (cert) => {
    setForm((prev) => ({
      ...prev,
      certificates: prev.certificates.includes(cert)
        ? prev.certificates.filter((item) => item !== cert)
        : [...prev.certificates, cert],
    }));
  };

  const yesNoToBool = (value) => value === "yes";

  async function uploadFile(file, folder) {
    if (!file) return null;
    const filePath = `${folder}/${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath);

    return data.publicUrl;
  }

  const handleSubmit = async () => {
    setErrorMsg("");
    setSuccess("");

    if (!form.first_name || !form.last_name || !form.email) {
      setErrorMsg("First name, last name, and email are required.");
      return;
    }

    if (!selectedPosition) {
      setErrorMsg("Please select a position first.");
      return;
    }

    setSubmitting(true);

    try {
      const folder = `${form.first_name}-${form.last_name}-${Date.now()}`;

      const resumeUrl = await uploadFile(form.resume_file, folder);
      const securityLicenseUrl = await uploadFile(
        form.security_license_file,
        folder
      );
      const driverLicenseUrl = await uploadFile(form.driver_license_file, folder);
      const certificationsUrl = await uploadFile(
        form.certifications_file,
        folder
      );

      const payload = {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        street_address: form.street_address,
        city: form.city,
        state: form.state,
        zip_code: form.zip_code,

        authorized_to_work: yesNoToBool(form.authorized_to_work),
        background_check: yesNoToBool(form.background_check),
        reliable_transportation: yesNoToBool(form.reliable_transportation),
        valid_driver_license: yesNoToBool(form.valid_driver_license),

        position_applied: selectedPosition,
        security_license_number: form.security_license_number,
        years_of_experience: form.years_of_experience
          ? Number(form.years_of_experience)
          : null,
        current_employer: form.current_employer,

        certificates: form.certificates,

        pre_assignment_expiry: form.pre_assignment_expiry || null,
        ojt_16hr_expiry: form.ojt_16hr_expiry || null,
        annual_8hr_expiry: form.annual_8hr_expiry || null,
        f01_expiry: form.f01_expiry || null,
        f03_expiry: form.f03_expiry || null,
        cpr_expiry: form.cpr_expiry || null,
        first_aid_expiry: form.first_aid_expiry || null,

        resume_url: resumeUrl,
        security_license_url: securityLicenseUrl,
        driver_license_url: driverLicenseUrl,
        certifications_url: certificationsUrl,

        experience_summary: form.experience_summary,
        status: "NEW",
        recruiter_notes: "",
      };

      const { data, error } = await supabase
        .from("career_applications")
        .insert([payload])
        .select();

      if (error) {
        console.error("Insert error:", error);
        throw error;
      }

      console.log("Inserted application:", data);

      setSuccess("Application submitted successfully.");
      setForm(initialForm);
      setShowApplication(false);
      setShowQualification(false);
      setSelectedPosition("");
    } catch (error) {
      console.error("Submit error:", error);
      setErrorMsg(error.message || "Application could not be submitted.");
    }

    setSubmitting(false);
  };

  return (
    <Box sx={{ background: "#05070d", minHeight: "100vh", color: "#fff" }}>
      <Box sx={heroSection}>
        <Container maxWidth="lg">
          <Typography sx={eyebrow}>CAREERS</Typography>

          <Typography sx={heroTitle}>
            Join New York&apos;s Elite Security Team
          </Typography>

          <Typography sx={heroSubtitle}>
            Build a rewarding career protecting people, property and communities
            throughout New York.
          </Typography>
        </Container>
      </Box>

      {success && (
        <Container maxWidth="md" sx={{ mb: 4 }}>
          <Alert severity="success">{success}</Alert>
        </Container>
      )}

      <OpenPositions onApply={handleApply} />

      {showQualification && (
        <Container id="qualification-section" maxWidth="md" sx={{ py: 10 }}>
          <Paper elevation={0} sx={cardStyle}>
            <Typography sx={sectionLabel}>QUICK QUALIFICATION</Typography>

            <Typography sx={{ fontSize: "2rem", fontWeight: 900, mb: 3 }}>
              {selectedPosition}
            </Typography>

            <Stack spacing={2}>
              <Typography>✓ Authorized to work in the U.S.</Typography>
              <Typography>✓ Able to pass a background check</Typography>
              <Typography>✓ Reliable transportation</Typography>
              <Typography>✓ Available for flexible schedules</Typography>
            </Stack>

            <Button
              variant="contained"
              onClick={() => {
                setShowApplication(true);
                setTimeout(() => {
                  document.getElementById("application-form")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }, 100);
              }}
              sx={goldButton}
            >
              Continue Application
            </Button>
          </Paper>
        </Container>
      )}

      {showApplication && (
        <Container id="application-form" maxWidth="lg" sx={{ py: 10 }}>
          <Paper elevation={0} sx={cardStyle}>
            <Typography sx={sectionLabel}>POSITION APPLYING FOR</Typography>

            <Typography sx={{ fontSize: "1.5rem", fontWeight: 900, mb: 4 }}>
              {selectedPosition}
            </Typography>

            {errorMsg && (
              <Alert severity="error" sx={{ mb: 4 }}>
                {errorMsg}
              </Alert>
            )}

            <Typography sx={sectionLabel}>Personal Information</Typography>

            <Box sx={gridStyle}>
              <TextField label="First Name" value={form.first_name} onChange={(e) => updateForm("first_name", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Last Name" value={form.last_name} onChange={(e) => updateForm("last_name", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Email Address" value={form.email} onChange={(e) => updateForm("email", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Phone Number" value={form.phone} onChange={(e) => updateForm("phone", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Street Address" value={form.street_address} onChange={(e) => updateForm("street_address", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="City" value={form.city} onChange={(e) => updateForm("city", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="State" value={form.state} onChange={(e) => updateForm("state", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Zip Code" value={form.zip_code} onChange={(e) => updateForm("zip_code", e.target.value)} fullWidth sx={fieldStyles} />
            </Box>

            <Typography sx={sectionLabel}>Employment Eligibility</Typography>

            <Stack spacing={3} sx={{ mb: 5 }}>
              <YesNoSelect label="Authorized To Work In The U.S." value={form.authorized_to_work} onChange={(v) => updateForm("authorized_to_work", v)} />
              <YesNoSelect label="Can Pass Background Check" value={form.background_check} onChange={(v) => updateForm("background_check", v)} />
              <YesNoSelect label="Reliable Transportation" value={form.reliable_transportation} onChange={(v) => updateForm("reliable_transportation", v)} />
              <YesNoSelect label="Valid Driver License" value={form.valid_driver_license} onChange={(v) => updateForm("valid_driver_license", v)} />
            </Stack>

            <Typography sx={sectionLabel}>Security Credentials</Typography>

            <Stack spacing={3} sx={{ mb: 5 }}>
              <TextField label="Security License Number" value={form.security_license_number} onChange={(e) => updateForm("security_license_number", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Years Of Experience" type="number" value={form.years_of_experience} onChange={(e) => updateForm("years_of_experience", e.target.value)} fullWidth sx={fieldStyles} />
              <TextField label="Current Employer" value={form.current_employer} onChange={(e) => updateForm("current_employer", e.target.value)} fullWidth sx={fieldStyles} />
            </Stack>

            <Typography sx={sectionLabel}>Certifications</Typography>

            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap", mb: 5 }}>
              {certificateOptions.map((cert) => {
                const active = form.certificates.includes(cert);

                return (
                  <Chip
                    key={cert}
                    label={cert}
                    onClick={() => toggleCertificate(cert)}
                    sx={{
                      color: active ? "#000" : "#fff",
                      background: active ? "#d4af37" : "#000",
                      border: "1px solid rgba(212,175,55,.45)",
                      fontWeight: 800,
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </Stack>

            <Typography sx={sectionLabel}>Certification Expiry Dates</Typography>

            <Box sx={gridStyle}>
              <DateField label="8 Hour Pre Assignment Expiry" value={form.pre_assignment_expiry} onChange={(v) => updateForm("pre_assignment_expiry", v)} />
              <DateField label="16 Hour OJT Expiry" value={form.ojt_16hr_expiry} onChange={(v) => updateForm("ojt_16hr_expiry", v)} />
              <DateField label="8 Hour Annual Expiry" value={form.annual_8hr_expiry} onChange={(v) => updateForm("annual_8hr_expiry", v)} />
              <DateField label="F01 Fire Guard Expiry" value={form.f01_expiry} onChange={(v) => updateForm("f01_expiry", v)} />
              <DateField label="F03 Fire Guard Expiry" value={form.f03_expiry} onChange={(v) => updateForm("f03_expiry", v)} />
              <DateField label="CPR Expiry" value={form.cpr_expiry} onChange={(v) => updateForm("cpr_expiry", v)} />
              <DateField label="First Aid Expiry" value={form.first_aid_expiry} onChange={(v) => updateForm("first_aid_expiry", v)} />
            </Box>

            <Typography sx={sectionLabel}>Upload Documents</Typography>

            <Box sx={gridStyle}>
              <UploadBox label="Upload Resume" file={form.resume_file} onChange={(file) => updateForm("resume_file", file)} />
              <UploadBox label="Upload Security License" file={form.security_license_file} onChange={(file) => updateForm("security_license_file", file)} />
              <UploadBox label="Upload Driver License" file={form.driver_license_file} onChange={(file) => updateForm("driver_license_file", file)} />
              <UploadBox label="Upload Certifications" file={form.certifications_file} onChange={(file) => updateForm("certifications_file", file)} />
            </Box>

            <TextField
              label="Tell Us About Your Experience"
              multiline
              rows={5}
              fullWidth
              value={form.experience_summary}
              onChange={(e) => updateForm("experience_summary", e.target.value)}
              sx={fieldStyles}
            />

            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={handleSubmit}
              disabled={submitting}
              sx={{ ...goldButton, mt: 6, width: "100%" }}
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </Button>
          </Paper>
        </Container>
      )}
    </Box>
  );
}

function YesNoSelect({ label, value, onChange }) {
  return (
    <TextField select label={label} value={value} onChange={(e) => onChange(e.target.value)} fullWidth sx={fieldStyles}>
      <MenuItem value="yes">Yes</MenuItem>
      <MenuItem value="no">No</MenuItem>
    </TextField>
  );
}

function DateField({ label, value, onChange }) {
  return (
    <TextField
      label={label}
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      sx={fieldStyles}
      InputLabelProps={{ shrink: true }}    />
  );
}

function UploadBox({ label, file, onChange }) {
  return (
    <Button component="label" sx={uploadBox}>
      <Box>
        <Typography sx={{ fontWeight: 900 }}>{label}</Typography>
        <Typography sx={{ color: "#94a3b8", fontSize: 13, mt: 1 }}>
          {file ? file.name : "PDF, JPG, PNG, DOC, DOCX"}
        </Typography>
      </Box>

      <input
        hidden
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
      />
    </Button>
  );
}

const heroSection = {
  pt: 18,
  pb: 12,
  textAlign: "center",
};

const eyebrow = {
  color: "#d4af37",
  fontWeight: 800,
  letterSpacing: 2,
  mb: 2,
};

const heroTitle = {
  fontSize: { xs: "3rem", md: "5rem" },
  fontWeight: 900,
  lineHeight: 1.05,
  mb: 3,
};

const heroSubtitle = {
  color: "#94a3b8",
  maxWidth: 700,
  mx: "auto",
};

const cardStyle = {
  p: { xs: 3, md: 5 },
  borderRadius: "30px",
  background: "linear-gradient(145deg,#111827,#0b1220)",
  border: "1px solid rgba(212,175,55,.15)",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  gap: 3,
  mb: 5,
};

const sectionLabel = {
  color: "#d4af37",
  fontWeight: 900,
  mb: 3,
  letterSpacing: 1,
};

const goldButton = {
  mt: 5,
  background: "#d4af37",
  color: "#000",
  fontWeight: 900,
  borderRadius: "16px",
  px: 4,
  py: 1.5,
  "&:hover": {
    background: "#f0c94d",
  },
};

const uploadBox = {
  height: 130,
  border: "2px dashed rgba(212,175,55,.4)",
  color: "#fff",
  borderRadius: "18px",
  textAlign: "center",
  background: "rgba(255,255,255,.025)",
  "&:hover": {
    borderColor: "#d4af37",
    background: "rgba(212,175,55,.06)",
  },
};

const fieldStyles = {
  "& .MuiOutlinedInput-root": {
    background: "rgba(255,255,255,.03)",
    borderRadius: "14px",
    color: "#fff",
    "& fieldset": {
      borderColor: "rgba(212,175,55,.15)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(212,175,55,.45)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d4af37",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#94a3b8",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#d4af37",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
};