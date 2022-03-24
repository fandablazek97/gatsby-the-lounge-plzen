import { navigate } from "gatsby";

// Layout
import AppLayout from "layouts/AppLayout";
import LangLayout from "layouts/en/LangLayout";

// Global Components
import Seo from "components/Seo";
import Button from "components/ui/Button";

// Icons
import { HiHome } from "react-icons/hi";

export default function NotFoundPage() {
  return (
    <AppLayout>
      <LangLayout>
        <Seo title="404: Page not found" robotsEnabled={false} />

        <header className="relative h-screen min-h-[640px] w-screen bg-body-100">
          <div className="ui-wrapper flex h-full flex-col items-center justify-center">
            <span className="ui-heading" data-heading="xl">
              &#128531;
            </span>
            <h1 className="ui-heading text-center text-3xl text-primary sm:text-5xl lg:text-6xl">
              Page not found
            </h1>
            <p className="ui-lead mx-auto mb-16 max-w-3xl text-center">
              Don't run away yet! It looks like the page you are trying find no
              longer exists or has been moved. Click the button and you can
              easily go to the main page.
            </p>
            <Button
              as="a"
              onClick={() => {
                navigate("/en/");
              }}
              IconLeft={<HiHome />}
            >
              Main page
            </Button>
          </div>
        </header>
      </LangLayout>
    </AppLayout>
  );
}
