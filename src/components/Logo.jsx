import { Link } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <Link
      to="/"
      className={`logo ${className}`.trim()}
      aria-label="Puhas Kodu Tallinn home"
      title="Puhas Kodu Tallinn"
    >
      <span className="logo-wordmark" aria-hidden="true">
        <span className="logo-line logo-line--brand">
          <span className="logo-p">P</span>uhas
        </span>
        <span className="logo-line logo-line--kodu">kodu</span>
        <span className="logo-line logo-line--city">Tallinn</span>
      </span>
      <span className="sr-only">Puhas Kodu Tallinn</span>
    </Link>
  );
}
