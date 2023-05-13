export function getUniversityFilteredUsers(users, university){

    if (university === "") return users
    return users.filter((user) => user.university.toLowerCase().includes(university.toLowerCase()));
}