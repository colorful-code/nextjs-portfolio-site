import Image from 'next/image'
import {FiExternalLink} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

type ProjectCardProps = {
    imageName: string;
    imageAlt: string;
    header: string;
    repoName: string;
    siteUrl: string;
    tools: string[];
    text: string;
}

const gitHubUrl = "https://github.com/colorful-code/";

const Nav = ({ imageName, imageAlt, header, repoName, siteUrl, tools, text }: ProjectCardProps) => {
    return (
        <div className="flex flex-col py-6 gap-6 w-96 max-w-sm rounded overflow-hidden shadow-lg border border-emerald-600">
            <div className="flex-none flex justify-center items-center">
                <div className="w-3/4">
                    <Image className="w-full h-40 object-fit rounded-sm shadow-[8px_8px_0px_rgba(30,100,105,1)] shadow-round" src={`/images/${imageName}.jpg`} width="200" height="0" alt={imageAlt} />
                </div>
            </div>
            <div className="px-6 grow">
                <h1 className="text-neutral-800 font-medium text-lg mb-2 text-center">{header}</h1>
                <p className="text-neutral-800 text-base font-extralight text-center">{text}</p>
            </div>
            <div className="px-6">
                <div className="flex flex-wrap justify-center gap-2">
                    {tools && tools.map((tool) => 
                     <span key={tool} className="inline-block bg-amber-300 rounded-lg px-2 py-1 text-xs font-medium text-gray-700">#{tool}</span>
                    )}
                </div>
            </div>
            <hr className="w-2/3 m-auto opacity-30"/>
            <div className="px-2">
                <div className="flex justify-center space-x-4 sm:space-x-12">
                    <a className="shadow-sm flex items-center p-1 rounded-lg text-sm border border-green-600 bg-green-300 active:bg-emerald-500 hover:bg-emerald-400 focus:ring-1 focus:ring-gray-600 focus:outline-none" href={gitHubUrl + repoName} target="_blank"><BsGithub className="inline mx-1"/> See code</a>
                    {siteUrl && <a className="shadow-sm flex items-center p-1 rounded-lg text-sm border border-green-600 bg-green-300 active:bg-emerald-500 hover:bg-emerald-400 focus:ring-1 focus:ring-gray-600 focus:outline-none" href={siteUrl} target="_blank"><FiExternalLink className="inline mx-1"/> Visit site</a>}
                </div>
            </div>
        </div>
    )

}

export default Nav