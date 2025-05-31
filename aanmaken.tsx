import { useForm } from 'react-hook-form';

export default function KlusAanmaken() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/klussen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.success ? 'Klus geplaatst!' : result.error);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">Nieuwe klus plaatsen</h2>
      <input {...register('title')} placeholder="Titel" className="border p-2 w-full" />
      <textarea {...register('description')} placeholder="Beschrijving" className="border p-2 w-full" />
      <input {...register('location')} placeholder="Locatie" className="border p-2 w-full" />
      <select {...register('category')} className="border p-2 w-full">
        <option>Schilderwerk</option>
        <option>Loodgieterij</option>
        <option>Elektrisch</option>
        <option>Tuin & Buitenruimte</option>
        <option>Meubelmontage</option>
        <option>Vloeren</option>
        <option>Schoonmaak</option>
        <option>Transport</option>
        <option>Technische hulp</option>
        <option>Overig</option>
      </select>
      <input type="date" {...register('date')} className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Klus aanmaken</button>
    </form>
  );
}
