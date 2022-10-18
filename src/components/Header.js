import React from 'react';

function Header(){
    return(
        <div id="wrapper">
            <header>
            <a href="/?city=Chicago" className='Chicago'>Chicago</a>
            <a href="/?city=Seoul" className='Seoul'>Seoul</a>
            <a href="/?city=Brooklyn" className='Brooklyn'>Brooklyn</a>
            <a href="/?city=Paris" className='Paris'>Paris</a>
            </header>
        </div>
    )
}

export default Header;