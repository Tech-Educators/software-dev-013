export default function BrokenPage() {
  // We are going to pretend that something has gone wrong
  // maybe our fetch request has broken, the DB query is wrong, or something else..
  throw new Error(
    "Oh man, we're so sorry. something has broken, and it's definitely being looked into"
  );

  return (
    <div>
      <h2>Welcome to the broken page!</h2>
      <p>weve got fun and games</p>
    </div>
  );
}
