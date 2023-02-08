import TextProp from "./props/TextProp";

const RightBodyTextList = [
    {
        id:1,
        title:`TURKEY & SYRIA`,
        details:`The Grim Reality About Saving People Trapped by an Earthquake`,
    },
    {
        id:2,
        title:`NBA`,
        details:`One of Basketball’s Most Thrilling Dramas Takes Place off the Court`,
    },
    {
        id:3,
        title:`THE LAW`,
        details:`The Worst Judge in America Could Outlaw the Abortion Pill Nationwide. It Gets Worse.`,
    },
    {
        id:4,
        title:``,
        details:`A New Proposal Sure Sounds Like an Effort to Harvest Prisoners’ Organs`,
    },
    {
        id:5,
        title:`FAMILY`,
        details:`There’s Something You’re Forgetting to Do on Your Wedding Day
        I Thought I Was Close to My Family. Until I Learned About Their Private Celebrations.`,
    },
    {
        id:6,
        title:``,
        details:`
        I Thought I Was Close to My Family. Until I Learned About Their Private Celebrations.`,
    },
]




const RightBodyText=()=>{
    return (
      <div className="w-[22rem] hidden md:block lg:w-[26rem]">
        {RightBodyTextList.map((item)=>(
            <div key={item.id} className={`text-sm pb-3 ${item.id===1 || item.id===2 || item.id===4 ?
             `border-b border-dashed` : `border-0 border-dashed`}`}>
                <TextProp 
                  title={item.title} 
                  titleClassN={`text-red-800 font-medium py-2`}
                  details={item.details}/>
                  
            </div>
        ))}
      </div>  
    );
}

export default RightBodyText