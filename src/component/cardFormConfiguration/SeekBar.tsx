export default function SeekBar() {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 max-w-md">
      <h2>Tambah{"Publisher"}</h2>
      <input
        type="text"
        placeholder="device name"
        className="mb-2 w-full p-2 border border-gray-300 rounded"
        value={""}
      />
      <input
        type="text"
        placeholder="topic"
        className="mb-2 w-full p-2 border border-gray-300 rounded"
        value={""}
      />

    </div>
  );
}
