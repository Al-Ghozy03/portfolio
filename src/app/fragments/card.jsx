export default function Card({ icon, title, desc }) {
  return (
    <div className="border border-[#D6D6D6] rounded-2xl p-8">
      <div className="rounded-full bg-[#FFD3CC] h-11 w-11 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold capitalize mt-3 mb-1">{title}</h3>
      <p className="text-base">{desc}</p>
    </div>
  );
}
