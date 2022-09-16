import React from "react";


function awardslide() {
    const [display,setdisplay] = React.useState(true);
    return (
        <div>
            <button onClick={()=>setdisplay(!display)}>Hide Element Below</button>
            {display&&<div>Toggle Challenge</div>}
        </div>
    );
}

export default awardslide;