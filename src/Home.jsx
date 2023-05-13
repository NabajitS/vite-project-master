import { useState, useEffect, useCallback, useReducer } from 'react';
// import UserComp from './components/UserComp';
import Textfield from '@atlaskit/textfield';
import './Home.css';
import Button, { ButtonGroup } from '@atlaskit/button';
import Example from './Example';
import { userFilterReducer } from './reducers/userFilterReducer';
import { getBloodGroupFilteredUsers, getGenderFilteredUsers, getUniversityFilteredUsers, getAgeSortedUsers, getFirstNameSortedUsers } from './utilities';
import Shortlisted from './components/Shortlisted';

function Home({ showAllEmployees, searchUser }) {
  const [users, setUsers] = useState([]);
  // const [searchUser, setSearchUser] = useState('');
  const [shortlisted, setShortlisted] = useState([]);
  // const [showAllEmployees, setShowAllEmployees] = useState(false);
  const [limit, setLimit] = useState(15);
  const [skip, setSkip] = useState(0);

  const initialFilterState = {
    gender: "",
    bloodGroup: "",
    university: "",
    sortBy: '',
  }
  const [userFilterState, userFilterDispatch] = useReducer(userFilterReducer, initialFilterState);

  // const [gender, setGender] = useState('female')

  const shortlistEmployee = (currUser) => {
    setShortlisted((prev) => [...prev, { currUser }]);
  };

  const handlePrevPage = () => {
    if (skip > 0) {
      setSkip((prev) => prev - 15);
    }
  };

  const handleNextPage = () => {
    setSkip((prev) => prev + 15);
    // fetchFunc()
  };

  const fetchFunc = () => {
    // fetch(`https://dummyjson.com/users/search?q=${searchUser}`)
    // fetch(`https://dummyjson.com/users/filter?key=gender&value=${gender}`)
    fetch(
      `https://dummyjson.com/users/search?q=${searchUser}&limit=${limit}&skip=${skip}`
    )
      .then((res) => res.json())
      .then((resJson) => {
        setUsers(resJson.users);
      });
  };

  useEffect(() => {
    fetchFunc();
  }, [searchUser, skip]);


  const firstNameSortedUsers = getFirstNameSortedUsers(users, userFilterState.sortBy);

  const ageSortedUsers = getAgeSortedUsers(firstNameSortedUsers, userFilterState.sortBy);

  const universityFilteredUsers = getUniversityFilteredUsers(ageSortedUsers, userFilterState.university);

  const bloodFilteredUsers = getBloodGroupFilteredUsers(universityFilteredUsers, userFilterState.bloodGroup);
  // notice how bloodFilteredUsers is passed onto getGenderFilteredUsers 
  // this lets us use more that one filter simultaneously
  const genderedUsers =  getGenderFilteredUsers(bloodFilteredUsers, userFilterState.gender)

  
  console.log('userFilter - userFilterState', userFilterState);
  console.log('users - ', users);
  // console.log('genderedUsers - ', genderedUsers);
  return (
    <div className="home">

      {showAllEmployees ? (
        <>
        <div className="container">
        
        
          <div className="user-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Blood Group</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>More Details</th>
                </tr>
              </thead>
              {genderedUsers.map((user, i) => (
                <tbody key={i}>
                  <tr>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.company.name}</td>
                    <td>{user.bloodGroup}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      {/* <Button appearance="primary" onClick={openModal}>Open modal</Button> */}
                      <Example
                        shortlistEmployee={shortlistEmployee}
                        user={user}
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          </div>
          <div className="footer">
            <Button appearance="primary" onClick={handlePrevPage}>
              Prev
            </Button>
            <Button appearance="primary" onClick={handleNextPage}>
              Next
            </Button>

            {/* <Button
            appearance='secondary'
            onClick={userFilterDispatch({type: "GENDER", payload: "MALE"})}
            > 
              Gender
            </Button> */}
            <Button appearance="warning" onClick={() => userFilterDispatch({type: "GENDER", payload: "male"})}>
            male
            </Button>

            <Button appearance="warning" onClick={() => userFilterDispatch({type: "GENDER", payload: "female"})}>
            female
            </Button>

            <input 
              type="text"
              placeholder='blood group input'
              onChange={(e) => userFilterDispatch({type: "BLOOD", payload: e.target.value })}
            />

            <input 
              type="text"
              placeholder='enter university'
              onChange={(e) => userFilterDispatch({type: "UNIVERSITY", payload: e.target.value})}
            />

            <Button appearance="primary" onClick={() => userFilterDispatch({type: "SORT_BY_AGE", payload: "AGE"})}>
            Sort By Increasing Age
            </Button>

            <Button appearance="primary" onClick={() => userFilterDispatch({type: "SORT_BY_FIRST_NAME", payload: "FIRST_NAME"})}>
            Sort By FirstName
            </Button>

          </div>
        </>
      ) : (
        <div>
         <Shortlisted shortlisted={shortlisted} />
        </div>
      )}
    </div>
  );
}

export default Home;
