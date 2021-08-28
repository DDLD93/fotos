import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SettingsIcon from '@material-ui/icons/Settings';

function Docker() {
    return (
        <div className="docker">
            <div className="box" id="explore">
                <HomeIcon fontSize='large'/>
            </div>
            <div className="box" id="dashboard">
               <ExploreIcon fontSize='large'/>
            </div>
            <div className="box" id="settings">
                <SettingsIcon fontSize='large'/>
            </div>

        </div>
    )
}

export default Docker
