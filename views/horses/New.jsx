const React = require('react');
const Layout = require('../Layout');

module.exports = function NewHorse({ error }) {
  return (
    <Layout title="Page title">
      <h1 className="big">Add a Horse</h1>

      {error && (
        <section className="errors">
          <p>{error}</p>
        </section>
      )}

      <form id="new-horse-form" className="flex flex-row" method="post" action="/horses">
        <label className="input-group col-1-3">
          <input id="horse-name" className="input-group-input" type="text" name="name" />
          <span className="input-group-label">Name:</span>
        </label>

        <label className="input-group col-1-3">
          <input id="horse-age" className="input-group-input" type="text" name="age" />
          <span className="input-group-label">Age:</span>
        </label>

        <label className="input-group col-1-3">
          <input id="horse-breed" className="input-group-input" type="text" name="breed" />
          <span className="input-group-label">Breed:</span>
        </label>

        <button type="submit" className="button dark">Submit</button>
      </form>
    </Layout>
  );
};
