export function getBloodGroupFilteredUsers(users, bloodGroup) {
  if (bloodGroup === '') return users;

  // A -> if A exists in user1
  //   -> if A exists in user2

  // A+ -> if A+ exists in user1
  return users.filter((user) => user.bloodGroup.includes(bloodGroup));

}
