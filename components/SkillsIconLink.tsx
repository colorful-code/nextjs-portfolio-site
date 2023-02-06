const SkillsIconLink = ({ url, icon }: { url: string; icon: any }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="focus:outline-none focus:-translate-y-1 duration-300">
      <div className="shadow-md shadow-black w-10 h-10 rounded-full flex justify-center items-center bg-violet-500 m-1 md:w-12 md:h-12 lg:w-16 lg:h-16 transform transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-gray-900/50 hover:shadow-lg duration-300 active:scale-100">
        {icon}
      </div>
    </a>
  );
};

export default SkillsIconLink;
