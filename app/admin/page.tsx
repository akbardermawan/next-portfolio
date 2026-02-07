import { admin } from "./constant";

const Page = () => {
  return (
    <div className="bg-black min-h-screen pt-25 pr-10 pl-10">
      <h1 className="text-sky-500 text-2xl font-bold mb-10 text-center">
        ADMIN DASBOARD
      </h1>

      {admin.map((adm, index) => (
        <div
          key={index}
          className="rounded-lg 
          shadow-md 
          p-4 mb-2 
          border 
          border-sky-500
          hover:-translate-y-1
          hover:shadow-xl
        hover:border-sky-400
        hover:bg-sky-500/10"
        >
          <a href={adm.url}>
            <div className="flex items-center justify-between border-b border-sky-500 pb-3">
              <div className="flex items-center gap-4">
                <img
                  src={adm.icon}
                  alt={adm.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h4 className="font-semibold text-xl text-white">
                    {adm.title}
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Page;
