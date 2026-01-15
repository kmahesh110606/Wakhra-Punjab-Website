import { clubInfo, milestones, team, faculty } from "../data";
import Typewriter from "../components/Typewriter";

export default function About() {
  return (
    <div className="section container mx-auto px-4">
      {/* About Section */}
      <blockquote className="relative max-w-3xl mx-auto text-center mb-8">
        <p className="text-3xl italic font-bold text-brand-maroon dark:text-brand-gold tagline">
          "<Typewriter text={clubInfo.tagline} speed={80} />"
        </p>
      </blockquote>

      <br />
      <p className="text-center max-w-4xl mx-auto mb-12 about-intro">
        {clubInfo.intro}
      </p>

      <blockquote className="relative max-w-3xl mx-auto text-center mb-8">
        <p className="text-xl italic font-bold text-brand-maroon dark:text-brand-gold tagline">
          JI AAYA NU ❤️
        </p>
      </blockquote>

      {/* Milestones */}
      <div className="mb-12">
        <h3 className="text-2xl font-heading text-brand-gold mb-6">Milestones</h3>
        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-4 bg-white p-4 shadow rounded-2xl milestone-card"
            >
              <span className="text-brand-maroon font-bold">{m.year}</span>
              <div>
                <h4 className="font-semibold">{m.title}</h4>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Coordinators */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-center mb-6">Faculty Coordinators</h3>
        <div className="flex justify-center gap-32 flex-wrap">
          {faculty.map((member, idx) => (
            <div key={idx} className="flip-card w-72 h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front team-card flex flex-col items-center justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <h4 className="text-xl font-semibold text-center">
                    {member.name}
                  </h4>
                  <p className="text-sm opacity-80 text-center">{member.role}</p>
                </div>
                {/* Back */}
                <div className="flip-card-back team-card flex flex-col items-center justify-center p-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-36 h-36 rounded-full object-cover mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    {member.bio}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h3 className="text-2xl font-semibold text-center mb-6">Meet Our Board</h3>
        {(() => {
          const firstRow = team.slice(0, 2);
          const secondRow = team.slice(2, 5);
          const remaining = team.slice(5);

          const Card = ({ member, idx }) => (
            <div key={idx} className="flip-card w-72 h-80">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front team-card flex flex-col items-center justify-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <h4 className="text-xl font-semibold text-center">
                    {member.name}
                  </h4>
                  <p className="text-sm opacity-80 text-center">{member.role}</p>
                </div>
                {/* Back */}
                <div className="flip-card-back team-card flex flex-col items-center justify-center p-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-36 h-36 rounded-full object-cover mb-4"
                    loading="lazy"
                    decoding="async"
                  />
                  <h4 className="text-lg font-semibold mb-2 text-center">
                    {member.bio}
                  </h4>
                  <p className="text-sm text-center opacity-90">{member.about}</p>
                </div>
              </div>
            </div>
          );

          return (
            <div className="space-y-8">
              {/* Row 1: exactly 2 cards, centered */}
              {firstRow.length > 0 && (
                <div className="flex justify-center gap-32 flex-wrap">
                  {firstRow.map((m, i) => (
                    <Card member={m} idx={`r1-${i}`} />
                  ))}
                </div>
              )}
              {/* Row 2: up to 3 cards */}
              {secondRow.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center">
                  {secondRow.map((m, i) => (
                    <Card member={m} idx={`r2-${i}`} />
                  ))}
                </div>
              )}
              {/* Remaining rows: groups of 3 */}
              {remaining.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center">
                  {remaining.map((m, i) => (
                    <Card member={m} idx={`r3-${i}`} />
                  ))}
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
