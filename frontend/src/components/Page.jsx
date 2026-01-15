export default function Page({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-5">
        <h1 className="text-xl font-semibold mb-1">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
