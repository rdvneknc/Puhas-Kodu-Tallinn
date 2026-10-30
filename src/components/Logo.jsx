import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`logo ${className}`.trim()}
      aria-label="Kolibri Koristusteenused home"
      title="Kolibri Koristusteenused"
    >
      <img
        className="logo-img"
        src="/images/Kolibri koristusteenuste logo.jpg"
        alt="Kolibri Koristusteenused"
        width="280"
        height="62"
        draggable="false"
      />
    </Link>
  );
}
