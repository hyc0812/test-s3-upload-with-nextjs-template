"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const bucketUrl = "https://my-test-upload-bucket-yong-01.s3.amazonaws.com";
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const uploadUrl = `${bucketUrl}/${encodeURIComponent(file.name)}`;

    try {
      const res = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (res.ok) {
        setMessage(`✅ Uploaded successfully! 
          View file: ${bucketUrl}/${file.name}`);
      } else {
        setMessage("❌ Upload failed.");
      }
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>🧾 Simple S3 Upload (Test Only)</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleUpload}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        Upload
      </button>
      <p>{message}</p>
    </div>
  );
}
