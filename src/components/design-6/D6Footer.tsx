import Link from "next/link";
import { BusinessBarLogo } from "@/components/BusinessBarLogo";

const contacts = [
  {
    title: "Want to write for us?",
    body: "Write to businessbar.blog@gmail.com with the subject ‘Guest_your name’ and enclose an excerpt of your idea.",
  },
  {
    title: "Collaboration?",
    body: "Organisation, fest, or conference? Write to businessbar.blog@gmail.com with ‘Collaboration_event/org name’.",
  },
  {
    title: "Feedback",
    body: "Shoot to businessbar.blog@gmail.com with ‘Feedback/Suggestion_your name’. We’re all-ears.",
  },
];

export function D6Footer() {
  return (
    <footer className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-[#e5e4de] pt-12">
        <div className="grid gap-0 border border-[#e5e4de] sm:grid-cols-3">
          {contacts.map((item, i) => (
            <div
              key={item.title}
              className={`p-6 sm:p-8 ${
                i < contacts.length - 1 ? "border-b border-[#e5e4de] sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <p className="d6-mono mb-3 text-[10px] text-[#3d7068]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-[14px] font-medium text-[#1c1c1c]">{item.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-[#1c1c1c]/55">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <BusinessBarLogo className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-[#1c1c1c]/55">
              Exclusive networking, maximum serendipity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/design-5"
              className="d6-mono text-[10px] text-[#1c1c1c]/40 hover:text-[#3d7068]"
            >
              Design 5
            </Link>
            <span className="d6-mono text-[10px] text-[#3d7068]">Design 6</span>
          </div>
        </div>

        <p className="d6-mono mt-10 text-[10px] text-[#1c1c1c]/35">
          © {new Date().getFullYear()} BusinessBar
        </p>
      </div>
    </footer>
  );
}
