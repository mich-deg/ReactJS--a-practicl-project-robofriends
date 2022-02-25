import React from "react";
import Card from "./Card";

const CardList = (props) => {
    const {robots} = props;
    
    return (
        <div>
            {
            robots.map((robot, i) => {
        return (
            <Card 
            key = {i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
             />
        );
    })
    }
        </div>
    );
}

export default CardList;