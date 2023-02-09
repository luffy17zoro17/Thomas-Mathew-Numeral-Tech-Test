import ImageProp from "./props/ImageProp";
import TextProp from "./props/TextProp";
import RightBodyText from "./RightBodyText";



const LeftBodyText=[
    {
        id:1,
        title:``,
        details:`All the Jokes, Jeers, and Joe Bidenisms 
        of the State of the Union`,
    },
    {
        id:2,
        title:`NITISH PAHWA`,
        details:`Yes, Biden Really Said That About Oil`,
    },
    {
        id:3,
        title:`SHIRIN ALI AND SETH MAXON`,
        details:`Biden’s Folksiest Quips From His Address`,
    },
    {
        id:4,
        title:`MOLLY OLMSTEAD`,
        details:`Sarah Huckabee Sanders Is Quite the Symbolic
         Choice for a Biden Rebuttal`,
    }
]







const PageBody = () => {
    return (
     <div className="flex justify-center"> 
      <div className="flex w-[95%] flex-col md:flex-row
          pt-[3rem] md:pt-[5rem]
           md:gap-5 md:w-[80%] xl:w-[60%]">

        <div className="flex flex-col items-center pt-2">
           <TextProp title={`STATE OF THE UNION`} titleClassN={`bg-white mb-[-0.8rem] z-30 px-4
               font-bold tracking-wider text-gray-700`}/>

          <div className="flex border-t-4 py-6 border-blue-500 z-[-10] gap-5
            flex-col md:flex-row">

           <div className="">
              <ImageProp
                imgSrc={`https://compote.slate.com/images/0d5c56d8-fff3-4219-a906-a1738f5e2b53.jpeg?crop=4520%2C3013%2Cx1480%2Cy987&s=image-390`}
                imgHt={`900`}
                imgWd={`900`}
                imgAlt={`body_small_img`}
                imgClassN={`object-cover mb-3 h-[9rem] xl:h-[11rem]`}
              /> 
             {LeftBodyText.map((item)=>( 
              <div key={item.id} className="pb-5">  
              <TextProp
                title={item.title}
                titleClassN={`text-sm tracking-widest text-gray-800`}
                details={item.details}
                detailClassN={`font-bold text-lg`}
              />
              </div>
             ))}
           </div>

           <div className="relative">
              <ImageProp
                imgSrc={`https://compote.slate.com/images/45e14203-1322-4d4a-980e-9acd65a66c87.jpeg?crop=5598%2C3732%2Cx0%2Cy0&s=image-1170`}
                imgHt={`1500`}
                imgWd={`1900`}
                imgAlt={`body_large_img`}
                imgClassN={`object-cover h-[27rem] xl:h-[35rem]`}
              />
              <TextProp 
                  title={`BEN MATHIS-LILLEY`}
                  titleClassN={`text-xs text-gray-700 tracking-widest`}
                  details={`Joe Biden Reveals His Superpower: Acting Like a Pretty
                     Normal Person`}
                  detailClassN={`text-red-800 font-bold
                      bg-white pr-3 text-xl md:text-xl xl:text-4xl
                      xl:leading-[3rem]`} 
                  textDivClassN={`py-4 mb-[4rem] mt-[-6rem]
                    bg-white z-30 left-0 absolute w-[72vw]
                    md:w-[33vw] xl:w-[22vw]`}      
               />
           </div>
          </div> 
        </div>
        <RightBodyText/>

      </div>
     </div>   

    );
}

export default PageBody;