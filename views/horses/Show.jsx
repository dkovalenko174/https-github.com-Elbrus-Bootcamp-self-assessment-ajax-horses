const React = require('react');
const Layout = require('../Layout');

module.exports = function ShowHorse({ horse }) {
  return (
    <Layout>
      <h1 className="big">{horse.name}</h1>
      <ul className="list">
        <li className="list-item col-1-3">
          <h2>Name</h2>
          <p>{horse.name}</p>
        </li>
        <li className="list-item col-1-3">
          <h2>Breed</h2>
          <p>{horse.breed}</p>
        </li>
        <li className="list-item col-1-3">
          <h2>Age</h2>
          <p>{horse.age}</p>
        </li>
      </ul>
    </Layout>
  );
};
