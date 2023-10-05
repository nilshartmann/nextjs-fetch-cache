export async function fetchDate() {
  const r = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Argentina/Salta",
    { next: { tags: ["datetime"] } }
  );
  const data = await r.json();
  const datetime = data.datetime;

  console.log("Fetch returned datetime", datetime);
  return datetime;
}
