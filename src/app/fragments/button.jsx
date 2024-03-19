export default function Button({ children, onClick, className }) {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <div className="bg-[#FF644D] rounded-full h-[3.7rem] relative blur-lg opacity-50" />
      <button
        onClick={onClick}
        className="text-white font-semibold text-lg bg-[#FF644D] px-7 py-4 rounded-full absolute w-full transition-all hover:scale-110"
      >
        {children}
      </button>
    </div>
  );
}
