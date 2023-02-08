


const TextProp = ({title,details,titleClassN,detailClassN,
      textDivClassN}) => {
    return (
      <div className={textDivClassN}>
        <h1 className={titleClassN}>{title}</h1>
        <p className={detailClassN}>{details}</p>
      </div>  
    );
}
export default TextProp;