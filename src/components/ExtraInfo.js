import React from "react";

function ExtraInfo({ hog }) {
    const { specialty, greased, weight, "highest medal achieved": medal } = hog;
    return (
        <div>
            <p>Specialty: {specialty}</p>
            <p>{greased ? "Greased" : "Not Greased"}</p>
            <p>Weight: {weight}</p>
            <p>Highest Medal Acheived: {medal}</p>
        </div>
    )
};

export default ExtraInfo;