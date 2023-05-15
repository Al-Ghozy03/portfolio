export default function Experience({ title, date, company, description }) {
  return (
    <article className="flex space-x-6 mb-10">
      <div className="items-center flex flex-col">
        <div className="bg-[#3F50EA] p-3.5 rounded-full" />
        <div className="bg-white h-full w-0.5 mt-2" />
      </div>
      <div>
        <h1 className="font-semibold text-xl">
          {title} ({date})
        </h1>
        <h4 className="text-base font-medium">{company}</h4>
        <ul className="list-disc text-sm mt-3">
          {description?.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
