export default function PhotoCard({ label, onCapture }) {
  return (
    <div>
      <h4>{label}</h4>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => onCapture(e.target.files[0])}
      />
    </div>
  );
}
