import { HiOutlineExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const Card = (props) => {
  return (
    <>
      <div className="w-80 h-52 shadow-lg rounded-xl overflow-hidden relative group">
        <img className="block w-[100%] h-[100%] object-cover" src={props.imgUrl} alt="project-img" loading="lazy" ></img>
        <div className="overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#131313] to-transparent overflow-hidden w-[100%] h-0 transition-all duration-300 ease-in group-hover:h-[100%]">
          <div className="absolute bottom-0 left-0 w-[100%] text-white p-3">
            <h2 className="text-lg mb-2">{props.projectTitle}</h2>
            <div className="flex justify-between items-center gap-2">
              <ul className="flex gap-2 text-xs">
                {
                  props.skill.map((item, index) => (
                    <li className="bg-gray-500 py-1 px-2.5 rounded-lg" key={index}>{item}</li>
                  ))
                }
              </ul>
              <ul className="flex justify-end items-center gap-4 text-sm">
                <li><a href={props.externalUrl} target="_blank"><HiOutlineExternalLink size={22} /></a></li>
                <li><a href={props.githubUrl} target="_blank"><SiGithub size={20} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card