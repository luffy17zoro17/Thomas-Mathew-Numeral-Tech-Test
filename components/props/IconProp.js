



const IconProp = ({icon, iconDivClassN,onClicked}) => {
    return (
       <div onClick={onClicked} className={iconDivClassN}>
          {icon}
       </div> 
    );
}

export default IconProp;