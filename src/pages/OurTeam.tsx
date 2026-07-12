import { User } from "lucide-react";

// ---- Types ----------------------------------------------------------------

interface Member {
  name: string;
  role: string;
  photo: string | null;
  hue: number; // 0 => no-photo/legacy placeholder (silhouette icon)
}

interface Team {
  year: string;
  members: Member[];
}

// ---- Data ---------------------------------------------------------------
const TEAMS: Team[] = [
  {
    year: "2024-25",
    members: [
      { name: "Raj Singh", role: "Joint Secretary", photo: null, hue: 210 },
      { name: "Shlok Saxena", role: "Secretary", photo: null, hue: 265 },
      { name: "Ankesh Ansh", role: "Joint Secretary", photo: null, hue: 190 },
    ],
  },
  {
    year: "2023-24",
    members: [
      { name: "Yuvraj Singh", role: "Joint Secretary", photo: null, hue: 20 },
      { name: "Manash Kumar", role: "Secretary", photo: null, hue: 340 },
      { name: "Prayash Dash", role: "Joint Secretary", photo: null, hue: 205 },
    ],
  },
  {
    year: "2022-23",
    members: [
      { name: "Suraj Patil", role: "Joint Secretary", photo: null, hue: 45 },
      { name: "Aditya Surana", role: "Secretary", photo: null, hue: 200 },
      { name: "Pratyush Singh", role: "Joint Secretary", photo: null, hue: 150 },
    ],
  },
  {
    year: "2020-21",
    members: [
      { name: "Paranjay Garg", role: "Joint Secretary", photo: null, hue: 0 },
      { name: "Preety Sarwa", role: "Secretary", photo: null, hue: 0 },
      { name: "Harsh Pandey", role: "Joint Secretary", photo: null, hue: 0 },
    ],
  },
];

const ACCENT = "#6C4CFF";

// ---- Sub-components ------------------------------------------------------

function Avatar({ name, photo, hue }: Member) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="h-full w-full rounded-full object-cover"
      />
    );
  }
  if (hue === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-700">
        <User className="h-10 w-10 text-zinc-400" strokeWidth={1.5} />
      </div>
    );
  }
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-full text-lg font-semibold text-white"
      style={{
        background: `linear-gradient(135deg, hsl(${hue} 70% 45%), hsl(${hue + 40} 70% 30%))`,
      }}
    >
      {initials}
    </div>
  );
}

function MemberCard({ name, role, photo, hue }: Member) {
  return (
    <div className="group w-full max-w-[220px] rounded-2xl bg-zinc-50 px-6 py-7 text-center shadow-lg shadow-black/40 transition-transform duration-200 hover:-translate-y-1">
      <div
        className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full"
        style={{ boxShadow: `0 0 0 2px ${ACCENT}33` }}
      >
        <Avatar name={name} photo={photo} hue={hue} />
      </div>
      <p className="text-[15px] font-bold leading-tight text-zinc-900">{name}</p>
      <p className="mt-1 text-[13px] font-medium text-zinc-500">{role}</p>
    </div>
  );
}

function TeamSection({ year, members }: Team) {
  return (
    <section className="mt-14 first:mt-8">
      <h2 className="mb-6 text-center text-xl font-extrabold tracking-tight text-white">
        Team {year}
      </h2>
      <div className="flex flex-col items-center gap-6">
        {members.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}

// ---- Page -----------------------------------------------------------------

export default function OurSecretaries() {
  return (
    <div className="min-h-screen bg-black font-sans">
      <main className="mx-auto max-w-md px-5 pb-4 pt-10">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-white">
          Our Secretaries
        </h1>

        {TEAMS.map((team) => (
          <TeamSection key={team.year} {...team} />
        ))}
      </main>
    </div>
  );
}