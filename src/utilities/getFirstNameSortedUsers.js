export function getFirstNameSortedUsers(users, sortBy){
    if(sortBy === '') return users

    return users.sort((a, b) => a.firstName.localeCompare(b.firstName))
}