import React from "react";
import "../../styles/components/_boxes.scss"

const Companies = props => {
    let {companies} = props;

    return (
        <div className="multiline_box">
            <p>Production Companies: </p>
            {companies.map(company => {
                return (
                    <h3 key={company.id}>{company.name}({company.origin_country}),</h3>
                )
            })}
        </div>
    )
};

export default Companies;