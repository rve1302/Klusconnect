import { useForm } from 'react-hook-form';

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.token) {
      localStorage.setItem('token', result.token);
      alert('Ingelogd!');
    } else {
      alert(result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Inloggen</h2>
      <input {...register('email')} placeholder="Email" className="border p-2 w-full" />
      <input type="password" {...register('password')} placeholder="Wachtwoord" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Inloggen</button>
    </form>
  );
}
