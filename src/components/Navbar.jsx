import React from 'react'
import MainTitle from './Navbar/MainTitle'
import SearchBox from './Navbar/SearchBox'

const Navbar = ({onChange}) => {
    return (
      <div id="nav" className="w-100 bg-lightest-blue o-90 h4 flex items-center justify-around">
        <MainTitle label="RobotFriends" />
        <SearchBox searchChange={onChange} />
      </div>
    );
}

export default Navbar