import { navigate } from "gatsby";

// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/cs/LangLayout";

// Global Components
import Seo from "components/Seo";
import Button from "components/ui/Button";

// Icons
import { HiHome } from "react-icons/hi";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo title="404: Stránka nenalezena" robotsEnabled={false} />

        <header className="relative h-screen min-h-[640px] w-screen bg-body-100">
          <div className="ui-wrapper flex h-full flex-col items-center justify-center">
            <span className="ui-heading" data-heading="xl">
              &#128531;
            </span>
            <h1 className="ui-heading text-center text-3xl text-primary sm:text-5xl lg:text-6xl">
              Stránka nenalezena
            </h1>
            <p className="ui-lead mx-auto mb-16 max-w-3xl text-center">
              Ještě nikam neutíkejte! Vypadá to že stránka, kterou se pokoušíte
              nalézt již neexistuje nebo byla přesunuta. Kliknutím na tlačítko
              snadno přejdete na hlavní stránku.
            </p>
            <Button
              as="a"
              onClick={() => {
                navigate("/");
              }}
              IconLeft={<HiHome />}
            >
              Hlavní stránka
            </Button>
          </div>
        </header>
      </LangLayout>
    </AppLayout>
  );
}
