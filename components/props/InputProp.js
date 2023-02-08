


const InputProp = ({inputClassN,inputPlaceholder,
        inputDivClassN}) => {
    return (
      <div className={inputDivClassN}>
        <input
          placeholder={inputPlaceholder}
          className={inputClassN}
        />
      </div>  
    );
}

export default InputProp;