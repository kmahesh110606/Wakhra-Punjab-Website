// Events.jsx
import React, { useEffect, useMemo, useState } from "react";
import { computeEventState } from "../data";
import Countdown from "./Countdown";       // Your Countdown component
// import "./countdown.css";                   // Countdown styles

// Helper to format dates nicely
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function Events() {
  const baseUrl = import.meta.env.BASE_URL;

  // Initialize state by computing current event status based on the current time
  const initial = useMemo(() => computeEventState(new Date()), []);

  const [next, setNext] = useState(initial.nextEvent);
  const [upcoming, setUpcoming] = useState(initial.upcomingEvents);
  const [past, setPast] = useState(initial.pastEvents);

  // Refresh events on mount (in case time changed)
  useEffect(() => {
    const fresh = computeEventState(new Date());
    setNext(fresh.nextEvent);
    setUpcoming(fresh.upcomingEvents);
    setPast(fresh.pastEvents);
  }, []);

  // When countdown finishes, move next event to past, shift upcoming to next
  const handleCountdownComplete = () => {
    setPast((p) => (next ? [next, ...p] : p));
    setNext(upcoming.length ? upcoming[0] : null);
    setUpcoming((u) => u.slice(1));
  };

  return (
    <div className="section container mx-auto px-4">
      <center>
        <h2 className="text-3xl font-heading text-center text-brand-maroon mb-8">
          Events
        </h2>
        {next && (
          <div className="mb-12 card next-event-card max-w-md">
            <img
              src={next.img}
              alt={next.title}
              className="rounded-2xl w-full object-cover mb-4"
            />
            <h3 className="text-2xl font-heading text-brand-gold">{next.title}</h3>
            <br />
            <p className="text-gray-600 font-bold">{formatDate(next.date)}</p>
            <p className="mt-2 font-bold">Venue: {next.venue}</p>
            <p className="mt-2">{next.description}</p>

            <Countdown
              targetDate={new Date(next.date)}
              onComplete={handleCountdownComplete}
            />

            {next.link && (
              <div className="flex justify-center">
                <a
                  href={next.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 inline-block btn-outline text-sm"
                >
                  Register Now
                </a>
              </div>
            )}
          </div>
        )}
      </center>

      <div className="mb-12">
        <h3 className="text-2xl font-heading text-brand-gold mb-6">
          Upcoming Events
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcoming.map((ev, idx) => (
            <div key={idx} className="card">
              <img
                src={ev.img}
                alt={ev.title}
                className="rounded-2xl w-full h-64 object-cover mb-3"
              />
              <h4 className="font-heading text-lg text-brand-maroon">{ev.title}</h4>
              <p className="text-sm text-gray-600">
                {formatDate(ev.date)} | {ev.venue}
              </p>
              <p className="mt-2 text-sm">{ev.description}</p>
              {ev.link && (
                <a
                  href={ev.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 mt-3 inline-block btn-outline text-sm"
                >
                  Register Now
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-heading text-brand-gold mb-6">Past Events</h3>
        <div id="past-events-scroll" className="past-events-scroll scrollbar-hide">
          {past.map((ev, idx) => (
            <div
              key={idx}
              className="past-event-card shadow"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
             {ev.images?.length > 0 ? (
  <img
    src={ev.images[0]}
    alt={ev.title}
    className="w-full h-40 object-cover rounded-t-2xl"
  />
) : (
  <img
    src={ev.img || `${baseUrl}assets/events/wakhra_carnival_banner.png`}
    alt={ev.title}
    className="w-full h-40 object-cover rounded-t-2xl"
  />
)}
              <div className="p-3 text-center">
                <h4 className="font-heading text-brand-maroon">{ev.title}</h4>
                <p className="text-xs">
                  {ev.date.length > 12
                    ? new Date(ev.date).toLocaleString()
                    : ev.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
