import error from "../assets/error.png"
export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h2>Everyone left to eat ashlyam-fu.</h2>
      <img src={error}  alt="error" className="error" />
    </div>
  );
}
