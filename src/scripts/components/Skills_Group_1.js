import React from 'react';
import Skill_Item from './Skill_Item';
// Contains multiple skill items.

class Skills_Group_1 extends React.Component{
    render() {
        return(
            <div className='skills-list'>
                <Skill_Item name="JavaScript (ES6+)" level={5} />
                <Skill_Item name="HTML(5)" level={5} />
                <Skill_Item name="CSS(3)" level={5} />
                <Skill_Item name="PostCSS" level={4} />
                <Skill_Item name="JSON" level={4} />
                <Skill_Item name="Node.JS" level={4} />
                <Skill_Item name="jQuery" level={4} />
                <Skill_Item name="ReactJS" level={3} />
                <Skill_Item name="webpack" level={3} />
                <Skill_Item name="BEM" level={3} />
            </div>
        )
    }
}

export default Skills_Group_1;