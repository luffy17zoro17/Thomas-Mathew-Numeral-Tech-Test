import IconProp from "./props/IconProp";
import TextProp from "./props/TextProp";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import SearchIcon from '@mui/icons-material/Search';


import CloseIcon from '@mui/icons-material/Close';




const MenuContents = [
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
        title:`Podcasts`,
    }
]


const socialMediaIcons=[
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


const MenuButton = ({menuOpen,setMenuOpen}) => {

    
    return (
     <div className="">  
      <IconProp onClicked={()=>setMenuOpen(false)} icon={<CloseIcon/>}
        iconDivClassN={`fixed top-2 right-5 z-40 cursor-pointer
          text-gray-300 hover:text-white`}/>  

      <div className={menuOpen===true ? `bottom-0 w-screen 
       h-screen
       top-0 bg-black p-4 space-y-4 text-white z-30 fixed md:hidden` : `
         h-0 top-0 w-screen bg-black p-4 space-y-4 top-0 text-white z-30 hidden md:hidden`}>
        {MenuContents.map((item) => (
            <div key={item.id}>
               <TextProp title={item.title} 
               titleClassN={`hover:text-gray-500 cursor-pointer border-b pb-2
                border-gray-700`}/> 
            </div>    
        ))}
        <div className="cursor-pointer hover:text-gray-500 flex items-center border-b border-gray-700 pb-2">
             <IconProp icon={<SearchIcon/>}/>
             <TextProp title={`Search`}/>
        </div>
        <div className="flex items-center gap-3 ">
            <TextProp title={`FOLLOW US`}/>
            {socialMediaIcons.map((item)=>(
                <div key={item.id}>
                   <IconProp icon={item.icon} iconDivClassN={`cursor-pointer hover:text-gray-500`}/> 
                </div>    
            ))}
        </div>
        <TextProp title={`Subscribe`} titleClassN={`underline hover:text-gray-500 cursor-pointer 
          border-b border-gray-700 pb-2`} />
        <TextProp title={`Sign in`} titleClassN={`hover:text-gray-500 cursor-pointer
          border-b border-gray-700 pb-2`}/>
      </div> 
     </div>  
    );
}

export default MenuButton;