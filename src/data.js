// src/data.js

import { Linkedin } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;
const withBase = (path) => `${baseUrl}${path.replace(/^\/+/, "")}`;

// ---------- General Club Info ----------
export const clubInfo = {
  name: "Wakhra Punjab",
  tagline: "Celebrating the Unmatched Spirit of Punjab",
  intro:
    "Wakhra Punjab is VIT Chennai's cultural club dedicated to celebrating the traditions, art, music, dance, and food of Punjab. We organize events, performances, and activities that connect students with the rich heritage of Punjab.",
  email: "technicaldeptwp@gmail.com",
  instagram: "https://instagram.com/wakhrapunjab_vitc",
  Linkedin: "https://in.linkedin.com/company/wakhra-punjab-club-vit-chennai",
  locationEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123456789!2d74.8723!3d31.6340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAyLjQiTiA3NMKwNTInMjAuMyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

// ---------- Timeline ----------
export const milestones = [
  { year: "2021", title: "Club Founded", desc: "Wakhra Punjab started with 15 enthusiastic members." },
  { year: "2022", title: "First Cultural Fest", desc: "Organized a vibrant event with 500+ attendees." },
  { year: "2023", title: "Expanded Reach", desc: "Collaborated with 3 other cultural clubs on campus." },
  { year: "2024", title: "National Recognition", desc: "Performed Bhangra at a national-level youth festival." },
];

// ---------- Core Team ----------
export const team = [
  { name: "Hardik Chanana", role: "Chair-Person", bio: "Passionate about Punjabi culture and leadership.", img: withBase("assets/team/hc.png") },
  { name: "Meher Mehta", role: "Vice Chair-Person", bio: "Bhangra performer and organizer of cultural fests.", img: withBase("assets/team/mm.png") },
  { name: "Divya Sabharwal", role: "General Secretary", bio: "Writes about Punjabi traditions and language.", img: withBase("assets/team/ds.png") },
  { name: "Anirudh Kaplish", role: "General Secretary", bio: "Leads the planning and execution of major events.", img: withBase("assets/team/a.png") },
  { name: "Anmol Anand Singh", role: "Joint Secretary", bio: "Leads the planning and execution of major events.", img: withBase("assets/team/aas.png") },
];

// ---------- Events (raw) ----------
export const nextEvent = {
  title: "Wakhra Carnival 2025",
  date: "2025-09-14T17:30:00", // YYYY-MM-DDTHH:mm:ss
  venue: "Student Parking Lot",
  description: "A mega celebration of Punjabi culture with music, dance, food stalls, and carnival vibes!",
  img: withBase("assets/events/wakhra_carnival_banner.png"),
  link: "https://eventhubcc.vit.ac.in/EventHub/",
};

// Faculty Coordinators
export const faculty = [
  {
    name: "Dr. Rishikeshan C A",
    role: "Faculty Coordinator",
    bio: "Guides the club’s vision and cultural initiatives.",
    img: withBase("assets/faculty/rishikeshan_sir.png"),
  },
  {
    name: "Dr. Saurav Gupta",
    role: "Faculty Co-Coordinator",
    bio: "Supports event planning and student engagement.",
    img: withBase("assets/faculty/saurav_sir.png"),
  },
];

export const upcomingEvents = [
  {
    title: "Lohri Celebration",
    date: "2026-01-13T17:00:00",
    venue: "Main Ground",
    description: "Lohri: Festival of bonfires, harvest, and togetherness.",
    img: withBase("assets/events/lohri.jpg"),
    link: "https://eventhubcc.vit.ac.in/EventHub/",
  },
  {
    title: "Kite Carnival",
    date: "2026-01-23T13:30:00",
    venue: "Football Ground",
    description: "An evening of soulful Punjabi shayari and folk music.",
    img: withBase("assets/events/kite.jpg"),
    link: "https://eventhubcc.vit.ac.in/EventHub/",
  },
];

export const pastEvents = [
  {
    title: "Club Expo",
    date: "2025-07-18",
    images: [
      withBase("assets/events/expo.JPG"),
      withBase("assets/events/expo1.JPG"),
      withBase("assets/events/expo2.JPG")
    ]
  },
  {
    title: "Sanjh 2.0",
    date: "2025-07-29",
    images: [
      withBase("assets/events/sanjh.jpg"),
      withBase("assets/events/sanjh1.JPG"),
      withBase("assets/events/sanjh2.JPG")
    ]
  },
  {
    title: "Desi Videsi",
    date: "2025-02-28",
    images: [
      withBase("assets/events/desi.jpg"),
      withBase("assets/events/desi2.jpg"),
      withBase("assets/events/desi3.jpg")
    ]
  },


].sort((a, b) => new Date(b.date) - new Date(a.date));

// ---------- Culture Posts ----------
export const culturePosts = [
  {
    title: "The Spirit of Bhangra",
    excerpt: "Bhangra is more than just a dance — it's the heartbeat of Punjab...",
    img: withBase("assets/culture/bhangra.png"),
    link: "https://en.wikipedia.org/wiki/Bhangra_(dance)",
  },
  {
    title: "Punjabi Cuisine Delights",
    excerpt: "From makki di roti to sarson da saag, Punjabi food is rich and soulful...",
    img: withBase("assets/culture/food.jpg"),
    link: "https://en.wikipedia.org/wiki/Punjabi_cuisine",
  },
  {
    title: "Langar: Service with Love",
    excerpt: "Langar is the Sikh community kitchen that serves free meals to everyone, regardless of caste, religion, or background.",
    img: withBase("assets/culture/Langar.jpg"),
    link: "https://en.wikipedia.org/wiki/Langar_(Sikhism)",
  },
];

// ---------- Word of the Week ----------
export const wordOfWeek = {
  word: "Satrangi (ਸਤ੍ਰੰਗੀ)",
  meaning: "Multicolored / Vibrant",
  usage: "Punjab di zindagi satrangi hai — Life in Punjab is vibrant.",
};

// ===================================================================
// RUNTIME HELPERS for Events rollover (used by Events.jsx)
// ===================================================================

function toDate(d) {
  return d instanceof Date ? d : new Date(d);
}

function sortByDateAsc(arr) {
  return [...arr].sort((a, b) => toDate(a.date) - toDate(b.date));
}

/**
 * Returns a *new* event state where:
 * - If nextEvent is past, it is moved to pastEvents,
 * - The earliest upcoming event (if any) becomes the new nextEvent,
 * - Repeats until nextEvent is in the future or no upcoming left.
 */
export function computeEventState(now = new Date()) {
  const state = {
    nextEvent: nextEvent ? { ...nextEvent } : null,
    upcomingEvents: sortByDateAsc(upcomingEvents).map(e => ({ ...e })),
    pastEvents: [...pastEvents].map(e => ({ ...e })),
  };

  const isPast = (e) => e && toDate(e.date).getTime() <= now.getTime();

  // If nextEvent doesn't exist, try to pull from upcoming
  if (!state.nextEvent && state.upcomingEvents.length > 0) {
    state.nextEvent = state.upcomingEvents.shift();
  }

  // Roll over any past nextEvent(s)
  while (state.nextEvent && isPast(state.nextEvent)) {
    state.pastEvents.unshift(state.nextEvent); // add to top of past
    state.nextEvent = state.upcomingEvents.shift() || null;
  }

  return state;
}
