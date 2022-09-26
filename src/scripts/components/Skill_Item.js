import React from 'react';
// Takes a skill name (name: String) and a skill level (level: Integer)
// Renders the string with number of solid stars and light stars for the balance if skill level is below 5-stars.

class Skill_Item extends React.Component{
// function Skill_Item() {
    render() {
        const props = this.props;

        // Create an array of consecutive integers from 1 to props.level
        let starsArr = Array.from({length: props.level}, (_, i) => i + 1)
        
        // Create a solid star for every element in the array
        const solidStars = starsArr.map((star) => 
            <i key={star.toString()} className="fa fa-star icon__star--themeDark" aria-hidden="true"></i>
        ); 
        
        // Create light stars for the balance
        let balArr = Array.from({length: (5 - props.level)}, (_, i) => i + 1)
        const balStars = balArr.map((star) =>
            <i key={star.toString()} className="fa fa-star icon__star--themeLight" aria-hidden="true"></i>
        ); 

        return (
            <div>
                <span className="skill-title"> {props.name}</span>
                <span className="skill-rating">
                    {solidStars}{balStars}
                </span>
            </div>
        )
    }
}

export default Skill_Item; 