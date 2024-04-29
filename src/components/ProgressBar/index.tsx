interface Props {
    bgColor : string;
    completed : number;
    estimatedTime?: number;
}

const Progressbar = (props: Props) => {
    const { bgColor , completed} = props;

    const filterStyle: any ={
        height : "100%",
        width : `${completed}%`,
        backgroundColor: bgColor,
        borderRadius: "inherit",
        transition: 'width 1s ease-in-out',
    };
    const labelStyle = {
        padding : 5,
        color : "white",
        fontWeight : "bold",
        height : "24px"

    };


  return (
    <div className="progress-main">
        <div style={filterStyle}>
            <span style={labelStyle}>{completed === 100 ? "Done" : " "}</span>
        </div>

    </div>
  )
}

export default Progressbar;