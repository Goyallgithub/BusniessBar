import { InView } from "./InView";

const contacts = [
  {
    title: "Want to write for us?",
    body: "Write to team@businessbar.net with the subject ‘Guest_your name’ and enclose an excerpt of your idea.",
  },
  {
    title: "Collaboration?",
    body: "Organisation, fest, or conference? Write to team@businessbar.net with ‘Collaboration_event/org name’.",
  },
  {
    title: "Feedback",
    body: "Shoot to team@businessbar.net with ‘Feedback/Suggestion_your name’. We’re all-ears.",
  },
];

export function D2Footer() {
  return (
    <footer className="d2-panel relative border-t border-white/15">
      <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-5 sm:py-16 md:px-8 lg:px-10">
        <InView className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {contacts.map((item) => (
            <div key={item.title}>
              <h3 className="text-[14px] font-semibold text-[#f4f7fa]">
                {item.title}
              </h3>
              <p className="d2-panel-soft mt-2 text-[13px] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </InView>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 sm:mt-14 sm:pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-syne)] text-[13px] font-bold tracking-[0.12em] text-[#f4f7fa]">
            BUSINESSBAR
          </p>
          <p className="text-[12px] text-white/65">
            Exclusive networking, maximum serendipity
          </p>
        </div>
      </div>
    </footer>
  );
}
