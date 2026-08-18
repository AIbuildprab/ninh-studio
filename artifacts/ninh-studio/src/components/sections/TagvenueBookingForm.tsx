"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { site } from "@/lib/site";
import {
  MAX_PEOPLE,
  MIN_HOURS,
  buildTagvenueUrl,
  endSlots,
  isClosedDay,
  slotsForDate,
  todayISO,
} from "@/lib/booking";

export function TagvenueBookingForm() {
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [eventError, setEventError] = useState("");
  const [error, setError] = useState("");

  const fromOptions = useMemo(() => {
    return slotsForDate(date).filter((slot) => endSlots(date, slot.value).length > 0);
  }, [date]);
  const toOptions = useMemo(() => endSlots(date, from), [date, from]);
  const closed = isClosedDay(date);

  function onDateChange(value: string) {
    setDate(value);
    setFrom("");
    setTo("");
    setError("");
  }

  function onFromChange(value: string) {
    setFrom(value);
    setTo("");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setEventError("");

    if (!eventType.trim()) {
      setEventError("Please select an event type");
      return;
    }
    if (!date) {
      setError("Select a date.");
      return;
    }
    if (closed) {
      setError("The studio is closed on Mondays. Please pick another day.");
      return;
    }
    const count = Number(people);
    if (!count || count < 1 || count > MAX_PEOPLE) {
      setError(`People must be between 1 and ${MAX_PEOPLE}.`);
      return;
    }
    if (!from || !to) {
      setError("Choose a start and end time.");
      return;
    }

    const url = buildTagvenueUrl({
      eventType: eventType.trim(),
      date,
      people: String(count),
      from,
      to,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "h-11 rounded-md border-border bg-white pl-10 text-sm placeholder:text-muted-foreground focus-visible:ring-accent";

  return (
    <form id="book-studio" onSubmit={onSubmit} className="bg-card p-6 md:p-8 scroll-mt-28">
      <div className="mb-6 text-center">
        <p className="text-[1.65rem] font-semibold tracking-tight text-foreground leading-none">
          {site.rental.price}{" "}
          <span className="text-base font-medium text-muted-foreground">{site.rental.unit}</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">Minimum {MIN_HOURS} hours</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="event-type" className="font-semibold">
            Event type
          </Label>
          <Input
            id="event-type"
            value={eventType}
            onChange={(e) => {
              setEventType(e.target.value);
              if (eventError) setEventError("");
            }}
            placeholder="What event are you planning?"
            aria-invalid={!!eventError}
            className={`h-11 rounded-md focus-visible:ring-accent ${
              eventError ? "border-destructive" : "border-border"
            }`}
          />
          {eventError && (
            <p className="flex items-center gap-1.5 text-sm text-destructive">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-destructive text-[10px] leading-none">
                !
              </span>
              {eventError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-date" className="font-semibold">
            Date and time
          </Label>
          <div className="relative">
            <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              id="booking-date"
              type="date"
              min={todayISO()}
              value={date}
              onChange={(e) => onDateChange(e.target.value)}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <select
              aria-label="From"
              value={from}
              onChange={(e) => onFromChange(e.target.value)}
              disabled={!date || closed}
              className={`${fieldClass} w-full appearance-none pr-8 disabled:opacity-50`}
            >
              <option value="">From</option>
              {fromOptions.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <select
              aria-label="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              disabled={!from}
              className={`${fieldClass} w-full appearance-none pr-8 disabled:opacity-50`}
            >
              <option value="">To</option>
              {toOptions.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="booking-people" className="font-semibold">
            People
          </Label>
          <div className="relative w-1/2">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              id="booking-people"
              type="number"
              min={1}
              max={MAX_PEOPLE}
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder={`Max ${MAX_PEOPLE}`}
              className={fieldClass}
            />
          </div>
        </div>

        {closed && (
          <p className="text-sm text-destructive">Closed Mondays. Please choose another date.</p>
        )}
        {error && !closed && <p className="text-sm text-destructive">{error}</p>}

        <Button
          type="submit"
          className="w-full h-12 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide text-sm"
        >
          Request to book
        </Button>
        <p className="text-center text-sm text-muted-foreground">You won&apos;t be charged yet</p>
        <p className="text-center text-xs text-muted-foreground">
          Completes on{" "}
          <a href={site.tagvenueUrl} target="_blank" rel="noreferrer" className="underline hover:text-foreground">
            Tagvenue
          </a>
          , where Ninh manages studio rentals.
        </p>
      </div>
    </form>
  );
}
