const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Stylesheets */}
        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lobster+Two" />
        <link rel="stylesheet" href="/stylesheets/application.css" />

        {/* JavaScripts */}
        <script src="/js/application.js" />

        <title>Penelope&apos;s Horses</title>
      </head>

      <body className="">
        <header className="hero horse-image flex flex-centered">
          <h1 className="hero-heading fancy-text">Penelope&apos;s Horses</h1>
        </header>

        <main role="main" className="row light">
          <div className="container flex flex-column">
            {children}
          </div>
        </main>
      </body>
    </html>

  );
};
