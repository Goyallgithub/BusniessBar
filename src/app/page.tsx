import { SiteNav } from "@/components/site/SiteNav";
import { SiteHero } from "@/components/site/SiteHero";
import { SiteEvening } from "@/components/site/SiteEvening";
import { SiteVision } from "@/components/site/SiteVision";
import { SiteGallery } from "@/components/site/SiteGallery";
import { SiteTeam } from "@/components/site/SiteTeam";
import { SiteContact } from "@/components/site/SiteContact";
import { SiteFooter } from "@/components/site/SiteFooter";
import "@/components/site/site.css";

export default function Home() {
  return (
    <div className="bb">
      <SiteNav />
      <main>
        <SiteHero />
        <SiteEvening />
        <SiteVision />
        <SiteGallery />
        <SiteTeam />
        <SiteContact />
      </main>
      <SiteFooter />
    </div>
  );
}
