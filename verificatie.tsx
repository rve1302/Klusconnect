export default function Verificatie() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Verificatie uploaden</h2>
      <p>Upload een kopie van je ID en KvK-inschrijving.</p>
      <form className="space-y-4 mt-4">
        <input type="file" name="id_document" className="border p-2 w-full" />
        <input type="file" name="kvk_document" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Verzenden</button>
      </form>
    </div>
  );
}
