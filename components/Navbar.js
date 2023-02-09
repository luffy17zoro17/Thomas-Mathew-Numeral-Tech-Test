import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import SearchIcon from '@mui/icons-material/Search';
import IconProp from "./props/IconProp";

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import MenuButton from "./MenuButton";
import InputProp from "./props/InputProp";


const NavSections = [
   {
      id:1,
      title:`News & Politics`,
   },
   {
      id:2,
      title:`Culture`,
   },
   {
      id:3,
      title:`Technology`,
   },
   {
      id:4,
      title:`Business`,
   },
   {
      id:5,
      title:`Human Interest`,
   },
   {
      id:6,
      title:`Podcasts`
   }
]


const SocialMediaIcons = [
   {
      id:1,
      icon:<InstagramIcon/>,
   },
   {
      id:2,
      icon:<TwitterIcon/>,
   },
   {
      id:3,
      icon:<FacebookIcon/>,
   }
]



const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);

    return (
    <>  
    <div className="absolute left-0 h-[3rem] bg-black z-[-10] top-0 right-0 
       md:top-[2.8rem] md:h-[6.7rem]"/>  

       <div onClick={()=>setMenuOpen(true)} className="text-white flex items-center absolute top-2 left-3 gap-2
          cursor-pointer  md:hidden">
         <TextProp title={`Menu`}/>
         <IconProp 
           icon={<MenuIcon/>} iconDivClassN={`text-gray-300 hover:text-white`}/>
       </div>

       {menuOpen === true && (
           <MenuButton
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
           />
       )}

         <TextProp title={`Subscribe`} titleClassN={`underline decoration-red-500 top-2 absolute right-3
            text-white decoration-[0.15rem] underline-offset-[0.2rem] md:hidden`}/>

    <div className="flex justify-center items-center"> 
      <div className="flex pt-3">
         

         <div className="flex items-center pt-[1.5rem]">
           <div className="flex justify-center w-full top-[1.3rem] absolute left-0 z-[-10]
               md:static"> 
            <ImageProp
              imgSrc={`https://images.squarespace-cdn.com/content/v1/5454d4c3e4b0bd7384bd2dbd/1574760807056-FBDRMJ0JHQNHQDJ49OVR/Slate.jpg`}
              imgHt={`1900`}
              imgWd={`1900`}
              imgalt={`Heading_logo`}
              imgClassN={`object-contain h-[8rem] w-[8rem] mt-[-4rem] 
                md:mt-0 md:h-[11rem] xl:h-[11rem] xl:w-[11vw]`}

            />  
           </div> 

            <div className={`flex pt-[0.5rem] md:pl-7`}>
            {NavSections.map((item)=>(
                <div key={item.id} className="cursor-pointer
                    flex justify-center hover:underline hover:decoration-red-500
                      decoration-[0.1rem] xl:text-lg">
                   <TextProp title={item.title}
                      titleClassN={`text-white ${item.id===1 ? `hidden w-[8rem] flex justify-center md:flex` : 
                       item.id===2 ? `hidden w-[8rem] flex justify-center md:flex` :
                       item.id===3 ? `hidden w-[8rem] flex justify-center md:flex` : `hidden flex justify-center w-[8rem] xl:flex`}`}/>
                </div>   
            ))}
            </div>
         </div>

         <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col items-end hidden md:flex">

               <div className="flex gap-[1vw]">
               <TextProp 
                  title={`Subscribe for Just $15`}
                  titleClassN={`underline font-bold
                  decoration-red-500
                     decoration-2 underline-offset-[0.2rem]`}
               />
               •
               <TextProp
                  title={`Sign In`}
                  titleClassN={`bg-pink-200`}
               />
               </div>

               <div className="flex items-center pt-5">
                  <IconProp 
                     icon={<SearchIcon/>}
                     iconDivClassN={`text-gray-500`}
                  />
                  <InputProp inputPlaceholder={`Search`}
                     inputClassN={`bg-black text-white outline-none xl:w-[9rem]`}/>
               </div>
            </div>

            <div className="flex items-center gap-[1vw] text-sm
               text-gray-400 pb-6 hidden md:flex md:mb-[-0.5rem]">
               <TextProp title={`FOLLOW US`}/>
               {SocialMediaIcons.map((item)=>(
                  <div key={item.id}>
                     <IconProp icon={item.icon} iconDivClassN={`scale-[0.9]`}/>
                  </div>   
               ))}
            </div>
         </div>
      </div>  
    </div>  
    </>
    );
}

export default Navbar;