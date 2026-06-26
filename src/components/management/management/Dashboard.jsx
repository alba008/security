import { useEffect, useMemo, useState } from "react";
import { Box, Paper } from "@mui/material";
import { supabase } from "../../../lib/supabase";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import LoadingState from "../common/LoadingState";
import EmptyState from "../common/EmptyState";

import QuoteTable from "../tables/QuoteTable";
import CareerTable from "../tables/CareerTable";
import AcademyTable from "../tables/AcademyTable";
import ContactTable from "../tables/ContactTable";

import QuoteDetails from "../details/QuoteDetails";
import CareerDetails from "../details/CareerDetails";
import AcademyDetails from "../details/AcademyDetails";
import ContactDetails from "../details/ContactDetails";

const modules = {
  quotes: {
    label: "Quote Requests",
    table: "quote_requests",
    statuses: ["NEW", "CONTACTED", "QUOTED", "APPROVED", "DECLINED", "COMPLETED"],
  },
  careers: {
    label: "Career Applications",
    table: "career_applications",
    statuses: ["NEW", "REVIEWING", "INTERVIEW", "APPROVED", "DECLINED"],
  },
  academy: {
    label: "Academy Leads",
    table: "academy_leads",
    statuses: ["NEW", "CONTACTED", "ENROLLED", "DECLINED"],
  },
  contact: {
    label: "Contact Messages",
    table: "contact_requests",
    statuses: ["NEW", "READ", "RESPONDED", "CLOSED"],
  },
};

export default function Dashboard() {
  const [active, setActive] = useState("quotes");
  const [records, setRecords] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const config = modules[active];

  async function loadRecords(moduleKey = active) {
    setLoading(true);

    const { data, error } = await supabase
      .from(modules[moduleKey].table)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      setRecords([]);
      setSelected(null);
    } else {
      setRecords(data || []);
      setSelected(null);    }

    setLoading(false);
  }

  async function updateRecord(id, payload) {
    const finalPayload = {
      ...payload,
    };

    if (active === "quotes" || active === "careers") {
      finalPayload.updated_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from(config.table)
      .update(finalPayload)
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    setRecords((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...finalPayload } : item))
    );

    setSelected((prev) =>
      prev?.id === id ? { ...prev, ...finalPayload } : prev
    );
  }

  function changeModule(moduleKey) {
    setActive(moduleKey);
    setSearch("");
    loadRecords(moduleKey);
  }

  useEffect(() => {
    loadRecords("quotes");
  }, []);

  const filtered = useMemo(() => {
    return records.filter((record) =>
      JSON.stringify(record).toLowerCase().includes(search.toLowerCase())
    );
  }, [records, search]);

  return (
    <Box sx={page}>
      <Sidebar active={active} modules={modules} onChange={changeModule} />

      <Box sx={main}>
        <TopBar
          title={config.label}
          search={search}
          setSearch={setSearch}
          onRefresh={() => loadRecords()}
        />

        {loading ? (
          <LoadingState />
        ) : (
          <Box sx={workspace}>
            <Paper sx={panel}>
              {filtered.length === 0 ? (
                <EmptyState message="No records found." />
              ) : (
                <>
                  {active === "quotes" && (
                    <QuoteTable records={filtered} selected={selected} onSelect={setSelected} />
                  )}

                  {active === "careers" && (
                    <CareerTable records={filtered} selected={selected} onSelect={setSelected} />
                  )}

                  {active === "academy" && (
                    <AcademyTable records={filtered} selected={selected} onSelect={setSelected} />
                  )}

                  {active === "contact" && (
                    <ContactTable records={filtered} selected={selected} onSelect={setSelected} />
                  )}
                </>
              )}
            </Paper>

            <Paper sx={detailsPanel}>
              {!selected ? (
                <EmptyState message="Select a record to view details." />
              ) : (
                <>
                  {active === "quotes" && (
                    <QuoteDetails record={selected} statuses={config.statuses} updateRecord={updateRecord} />
                  )}

                  {active === "careers" && (
                    <CareerDetails record={selected} statuses={config.statuses} updateRecord={updateRecord} />
                  )}

                  {active === "academy" && (
                    <AcademyDetails record={selected} statuses={config.statuses} updateRecord={updateRecord} />
                  )}

                  {active === "contact" && (
                    <ContactDetails record={selected} statuses={config.statuses} updateRecord={updateRecord} />
                  )}
                </>
              )}
            </Paper>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const page = {
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
  background: "#05070d",
  color: "#fff",
};

const main = {
    mt:10,
    p: { xs: 2, md: 4 },
    pt: { xs: 4, md: 6 },
  };

const workspace = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1.45fr .9fr" },
    gap: 3,
    alignItems: "start",
    mt: 3,
  };

const panel = {
  background: "rgba(9,13,23,.96)",
  border: "1px solid rgba(255,255,255,.08)",
  borderRadius: 4,
  overflow: "hidden",
};

const detailsPanel = {
    background: "rgba(9,13,23,.96)",
    border: "1px solid rgba(212,175,55,.18)",
    borderRadius: 4,
    overflowY: "auto",
    maxHeight: "calc(100vh - 150px)",
    position: { lg: "sticky" },
    top: { lg: 110 },
  };