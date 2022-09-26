import React from 'react';
import Skill_Item from './Skill_Item';
// Contains multiple skill items.

class Skills_Group_2 extends React.Component{
    render() {
        return(
            <div className='skills-list'>
                <Skill_Item name="MS Visual Basic" level={5} />
                <Skill_Item name="Bootstrap" level={4} />
                <Skill_Item name="Git/GitHub" level={4} />
                <Skill_Item name="Python" level={4} />
                <Skill_Item name="Pandas" level={4} />
                <Skill_Item name="mongoDB" level={4} />
                <Skill_Item name="NoSQL" level={4} />
                <Skill_Item name="SQL" level={3} />
                <Skill_Item name="Postman" level={3} />
                <Skill_Item name="MS Power BI" level={2} />
            </div>
        )
    }
}

export default Skills_Group_2;