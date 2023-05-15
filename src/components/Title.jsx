export default function Title({ children, className }) {
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold">{children}</h1>
      <div className={`h-1 ${className} mx-auto bg-[#3F50EA]`}></div>
    </div>
  );
}
