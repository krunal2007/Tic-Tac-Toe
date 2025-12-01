function Box({value , boxNum, updateBox}) {
    return (
        <div className="box" onClick={() => updateBox(boxNum)}>
        {value}
        </div>
    )
}

export default Box
