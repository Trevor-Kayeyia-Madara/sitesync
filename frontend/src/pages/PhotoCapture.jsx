import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import { mockApi } from "../services/mockApi";

export default function PhotoCapture() {
  const navigate = useNavigate();
  const [coords, setCoords] = useState(null);
  const [photos, setPhotos] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => setCoords(pos.coords),
      () => alert("GPS permission required")
    );
  }, []);

  const capture = (type, file) => {
    setPhotos({ ...photos, [type]: file });
  };

  const submit = async () => {
    if (!photos.front || !photos.corner || !photos.task) {
      alert("All photos required");
      return;
    }

    for (const type in photos) {
      await mockApi.uploadPhoto({ type, coords });
    }

    navigate("/success");
  };

  return (
    <div>
      <h2>Photo Verification</h2>
      {coords && <p>📍 GPS Captured</p>}

      <PhotoCard label="Front View" onCapture={f => capture("front", f)} />
      <PhotoCard label="Inside Corner" onCapture={f => capture("corner", f)} />
      <PhotoCard label="Task Close-up" onCapture={f => capture("task", f)} />

      <button onClick={submit}>Submit Daily Report</button>
    </div>
  );
}
