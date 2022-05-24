const React = require('react');
const Layout = require('../Layout');

module.exports = function Horses({ horses }) {
  return (
    <Layout>
      <h1 className="big">Meet the Herd</h1>

      <ul className="list">
        {horses.map((horse) => (
          <li className="list-item col-1-2" key={horse.id}>
            <a className="big fancy-text light-link" href={`/horses/${horse.id}`}>{horse.name}</a>
          </li>
        ))}
      </ul>

      <form className="flex flex-column" method="GET" action="/horses/new">
        <button type="submit" className="button dark">Add a Horse</button>
      </form>
    </Layout>
  );
};
