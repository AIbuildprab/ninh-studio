import { site } from "@/lib/site";

/** JS getDay(): 0 Sun … 6 Sat */
export const STUDIO_HOURS: Record<number, { open: string; close: string } | null> = {
  0: { open: "10:00", close: "17:30" },
  1: null,
  2: { open: "09:30", close: "17:30" },
  3: { open: "09:30", close: "17:30" },
  4: { open: "09:30", close: "17:30" },
  5: { open: "09:30", close: "17:30" },
  6: { open: "09:30", close: "17:30" },
};

const MIN_HOURS = 2;
const MAX_PEOPLE = 20;

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function fromMinutes(total: number) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatLabel(hhmm: string) {
  const [hStr, m] = hhmm.split(":");
  const h = Number(hStr);
  const suffix = h >= 12 ? "pm" : "am";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m} ${suffix}`;
}

export function slotsForDate(isoDate: string) {
  if (!isoDate) return [];
  const day = new Date(`${isoDate}T12:00:00`).getDay();
  const hours = STUDIO_HOURS[day];
  if (!hours) return [];

  const start = toMinutes(hours.open);
  const end = toMinutes(hours.close);
  const slots: { value: string; label: string }[] = [];

  for (let t = start; t <= end; t += 30) {
    slots.push({ value: fromMinutes(t), label: formatLabel(fromMinutes(t)) });
  }
  return slots;
}

export function endSlots(isoDate: string, from: string) {
  const all = slotsForDate(isoDate);
  if (!from) return all;
  const minEnd = toMinutes(from) + MIN_HOURS * 60;
  return all.filter((s) => toMinutes(s.value) >= minEnd);
}

export function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function isClosedDay(isoDate: string) {
  if (!isoDate) return false;
  return STUDIO_HOURS[new Date(`${isoDate}T12:00:00`).getDay()] == null;
}

export function buildTagvenueUrl(params: {
  eventType: string;
  date: string;
  people: string;
  from: string;
  to: string;
}) {
  const url = new URL(site.tagvenueUrl);
  url.searchParams.set("event_type", params.eventType);
  url.searchParams.set("date", params.date);
  url.searchParams.set("people", params.people);
  url.searchParams.set("from", params.from);
  url.searchParams.set("to", params.to);
  return url.toString();
}

export { MIN_HOURS, MAX_PEOPLE };
