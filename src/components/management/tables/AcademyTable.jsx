import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import StatusChip from "../common/StatusChip";

export default function AcademyTable({ records, selected, onSelect }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <Head>Name</Head>
          <Head>Course</Head>
          <Head>Phone</Head>
          <Head>Status</Head>
          <Head>Created</Head>
        </TableRow>
      </TableHead>

      <TableBody>
        {records.map((record) => (
          <Row
            key={record.id}
            selected={selected?.id === record.id}
            onClick={() => onSelect(record)}
          >
            <Cell>
              <Typography sx={mainText}>{record.full_name || "Unnamed Lead"}</Typography>
              <Typography sx={subText}>{record.email || "No email"}</Typography>
            </Cell>
            <Cell>{record.course_interest || "N/A"}</Cell>
            <Cell>{record.phone || "N/A"}</Cell>
            <Cell><StatusChip status={record.status} /></Cell>
            <Cell>{formatDate(record.created_at)}</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
}

function Row({ children, selected, onClick }) {
  return (
    <TableRow
      onClick={onClick}
      sx={{
        cursor: "pointer",
        background: selected ? "rgba(212,175,55,.12)" : "transparent",
        "&:hover": { background: "rgba(255,255,255,.04)" },
      }}
    >
      {children}
    </TableRow>
  );
}

function Head({ children }) {
  return <TableCell sx={headCell}>{children}</TableCell>;
}

function Cell({ children }) {
  return <TableCell sx={bodyCell}>{children}</TableCell>;
}

function formatDate(date) {
  if (!date) return "N/A";
  return new Date(date).toLocaleDateString();
}

const headCell = {
  color: "rgba(255,255,255,.45)",
  fontSize: 12,
  fontWeight: 900,
  textTransform: "uppercase",
  borderColor: "rgba(255,255,255,.08)",
};

const bodyCell = {
  color: "#fff",
  borderColor: "rgba(255,255,255,.08)",
};

const mainText = { color: "#fff", fontWeight: 900 };
const subText = { color: "rgba(255,255,255,.45)", fontSize: 12 };