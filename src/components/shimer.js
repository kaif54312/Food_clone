const Shimer=  ()=>{
    return (
    <div className="shimmer-container">
         {Array(9).fill("").map((e,index)=>(
            <div key={index} className="shimmer-card"></div>))}
    </div>
    );
};

export default Shimer;  