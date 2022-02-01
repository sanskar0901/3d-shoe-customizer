import React, { Suspense, useRef, useState, useEffect } from "react"
import Nzxt from "./Nzxt"
import Shoe from "./Shoe"
import '../App.css'
import simpleshoe from '../Assets/shoe.png'
import nzxt from '../Assets/nzxt.png'


function Shoecomp() {
    const [shoe, setshoe] = useState(true);

    return <div className="shoecomp">
        {shoe ? <Shoe /> : <Nzxt />}
        <div className="shoeSelector">
            <h1>Select shoe</h1>
            <img className="shoeimg" src={simpleshoe} onClick={() => setshoe(true)} />
            <img className="shoeimg" src={nzxt} onClick={() => setshoe(false)} />

        </div>
    </div >;
}

export default Shoecomp;
