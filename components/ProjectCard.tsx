import "animate.css"
import Image from 'next/image'
import {FiExternalLink} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'

type ProjectCardProps = {
    imageName: string;
    imageAlt: string;
    header: string;
    repoName: string;
    siteUrl: string;
    text: string;
}

const gitHubUrl = "https://github.com/colorful-code/";

const Nav = ({ imageName, imageAlt, header, repoName, siteUrl, text }: ProjectCardProps) => {
    return (
        <div className="m-4 max-w-xs w-5/6 rounded overflow-hidden shadow-lg sm:w-96 sm:mt-10">
            <Image className="w-full h-40 object-cover" src={`/images/${imageName}.jpg`} width="200" height="0" alt={imageAlt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{header}</div>
                <p className="text-gray-700 text-base">
                {text}
                </p>
            </div>
            <div className="p-4 flex flex-wrap justify-start">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NextJS</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tailwind</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Animate.css</span>
            </div>
            <div className="flex justify-center m-6 p-4 space-x-4">
                {siteUrl && <a className="mx-2" href={siteUrl}><FiExternalLink className="inline"/> Visit site</a>}
                <a className="mx-2" href={gitHubUrl + repoName} ><BsGithub className="inline"/> See code</a>
            </div>
        </div>
    )

}

export default Nav