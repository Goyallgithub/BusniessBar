const contacts = [
  {
    title: "Want to write for us?",
    body: "If you have an interesting story to tell and think BB fits as the right platform, write to us at team@businessbar.net with the subject ‘Guest_your name’ and enclose an excerpt of your idea.",
  },
  {
    title: "Have a collaboration in mind?",
    body: "If you are an organisation, fest, or conference and think our team can add value, write to team@businessbar.net with the subject ‘Collaboration_event/org name’.",
  },
  {
    title: "Feedback and suggestions",
    body: "Something you’d like us to know? Shoot to team@businessbar.net with the subject ‘Feedback/Suggestion_your name’. You’ll find us all-ears.",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(26,26,26,0.1)] bg-[#e8e6e1]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-5 sm:py-20 md:px-10 lg:px-14">
        <div className="reveal grid gap-8 sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {contacts.map((item) => (
            <div key={item.title}>
              <h3 className="text-[15px] font-semibold tracking-wide text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#5c5c5c]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[rgba(26,26,26,0.1)] pt-6 sm:mt-16 sm:pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] font-semibold tracking-[0.16em] text-[#1a1a1a]">
            BUSINESSBAR
          </p>
          <p className="text-[12px] text-[#8a8a8a]">
            Already sent a mail? We will revert soon. Till then, keep sipping
            at BusinessBar.
          </p>
        </div>
      </div>
    </footer>
  );
}
