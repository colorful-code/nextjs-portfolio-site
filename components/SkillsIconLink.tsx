const SkillsIconLink = ({url, icon}) => {
    return (
        <a href={url} target="_blank">
            <div className="shadow-md shadow-black w-10 h-10 rounded-full flex justify-center items-center bg-violet-500 m-1 transform transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-gray-900/50 hover:shadow-lg duration-300">
                {icon}
            </div>
            
        </a>
    )
}

export default SkillsIconLink