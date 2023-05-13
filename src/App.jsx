import React, {useState} from "react";


import Button from '@atlaskit/button';
import Home from './Home'
import Example from "./Example";

import Sidebar from "./components/Sidebar";
import Shortlisted from "./components/Shortlisted";


const App = () => {
  const [showAllEmployees, setShowAllEmployees] = useState(true);
  const [searchUser, setSearchUser] = useState('');

  const handleShowChange = (val) => {
    setShowAllEmployees(val)
    // console.log("Im working")
  }

  const handleSearchChange = (val) => {
    setSearchUser(val)
  }

  return (
    <div>
      <Sidebar searchUser={searchUser} handleSearchChange={handleSearchChange} handleShowChange={handleShowChange} />
      <Home searchUser={searchUser} showAllEmployees={showAllEmployees}  />

    </div>
  );
};

export default App;
