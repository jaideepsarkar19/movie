import { Counter } from "./Counter";

export function Welcome({ name, pic }) {
  return (
    <div>
      <img
        className="profile-pic"
        style={{ backgroundColor: "red", fontSize: "24px" }}
        src={pic}
        alt={name} />
      <h1>Welcome {name} to the MovieApp  🥳</h1>
      <Counter />
    </div>
  );
}
