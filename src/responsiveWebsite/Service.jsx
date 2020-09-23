import React from "react";
// import Common from "./Common";
// import web from "../images/deskSetup.jpg"
import Card from "./Card";
import cardData from "../data/cardData";

const Service = () => {
    return (
        <>
            <div className="my-5 text-center">
                <h1>Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {cardData.map((value, ind) => {
                                return (
                                    <Card
                                        title= {value.title}
                                        srcImage= {value.srcImage}
                                        cardPara= {value.cardPara}
                                        key= {ind}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;
// const Service = () => {
//     return (
//         <>
//             <Common 
//                 heading = "Services offered by"
//                 imgsrc = {web}
//                 visit = "/contact"
//                 btnText = "Contact Us"
//             />
//         </>
//     )
// }
// export default Service;