export function getGenderFilteredUsers(users, gender) {
  if (gender === '') return users;
  return users.filter((user) => user.gender === gender);
}
