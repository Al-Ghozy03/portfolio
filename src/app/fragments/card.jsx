export default function Card({ icon, title, desc }) {
  return (
    <div className="border border-[#D6D6D6] rounded-2xl lg:p-8 p-4">
      <div className="rounded-full bg-[#FFD3CC] h-11 w-11 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="lg:text-2xl text-xl font-semibold capitalize mt-3 mb-1">
        {title}
      </h3>
      <p className="lg:text-base text-sm">{desc}</p>
    </div>
  );
}
