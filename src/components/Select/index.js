import "./select.scss";

export default function Select() {
  return (
    <select name="select" className="select">
      <option value="español" defaultValue>
        Español
      </option>
      <option value="ingles">Ingles</option>
    </select>
  );
}
