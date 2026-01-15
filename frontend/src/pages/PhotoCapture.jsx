import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import Page from "../components/Page";
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
    setPhotos(prev => ({ ...prev, [type]: file }));
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

  const ready = photos.front && photos.corner && photos.task;

  return (
    <Page
      title="Photo Verification"
      subtitle="Photos are GPS & time verified"
    >
      {coords && (
        <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
          📍 GPS Captured
        </span>
      )}

      <PhotoCard label="Front View" onCapture={f => capture("front", f)} />
      <PhotoCard label="Inside Corner" onCapture={f => capture("corner", f)} />
      <PhotoCard label="Task Close-up" onCapture={f => capture("task", f)} />

      <button
        disabled={!ready}
        onClick={submit}
        className={`w-full mt-4 p-4 rounded-xl font-semibold ${
          ready
            ? "bg-emerald-700 text-white"
            : "bg-gray-300 text-gray-500"
        }`}
      >
        Submit Daily Report
      </button>
    </Page>
  );
}
