import React from 'react'

function Shortlisted({shortlisted}) {
  return (
    <div>
       <h1>Shortlistedddd</h1>
          <div className="user-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Blood Group</th>
                  <th>Email</th>
                  <th>Roll Number</th>
                </tr>
              </thead>
              {shortlisted.map((user, i) => (
                <tbody key={i}>
                  <tr>
                    <td>
                      {user.currUser.firstName}{' '}
                      {user.currUser.lastName}
                    </td>
                    <td>{user.currUser.company.name}</td>
                    <td>{user.currUser.bloodGroup}</td>
                    <td>{user.currUser.email}</td>
                    <td>{user.currUser.phone}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
    </div>
  )
}

export default Shortlisted