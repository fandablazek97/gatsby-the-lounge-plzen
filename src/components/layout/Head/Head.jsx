import Helmet from "react-helmet";

// Config
import globalSettings from "settings/globalSettings";

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="author" content={globalSettings.meta.author} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      {/* Theme color */}
      {/* <meta name="theme-color" content="#F8FAFC" /> */}
    </Helmet>
  );
}
