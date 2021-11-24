import React from 'react';
import './SidebarOption.css'
const Sidebaropt = ({Icon , title , number, selected}) => {
    return (
        <div className={`sidebarOption ${selected && "SidebarOption--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
            
        </div>
    );
}

export default Sidebaropt;
