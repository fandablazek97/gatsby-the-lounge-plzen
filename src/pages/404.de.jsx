import { navigate } from "gatsby";

// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/de/LangLayout";

// Global Components
import Seo from "components/Seo";
import Button from "components/ui/Button";

// Icons
import { HiHome } from "react-icons/hi";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo title="404: Seite nicht gefunden" robotsEnabled={false} />

        <header className="relative h-screen min-h-[640px] w-screen bg-body-100">
          <div className="ui-wrapper flex h-full flex-col items-center justify-center">
            <span className="ui-heading" data-heading="xl">
              &#128531;
            </span>
            <h1 className="ui-heading text-center text-3xl text-primary sm:text-5xl lg:text-6xl">
              Seite nicht gefunden
            </h1>
            <p className="ui-lead mx-auto mb-16 max-w-3xl text-center">
              Lauf noch nirgendwo hin! Es sieht aus wie die Seite, die Sie
              versuchen find existiert nicht mehr oder wurde verschoben. Drück
              den Knopf Sie können einfach zur Hauptseite gehen.
            </p>
            <Button
              as="a"
              onClick={() => {
                navigate("/de/");
              }}
              IconLeft={<HiHome />}
            >
              Hauptseite
            </Button>
          </div>
        </header>
      </LangLayout>
    </AppLayout>
  );
}
