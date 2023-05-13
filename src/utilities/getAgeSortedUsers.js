export function getAgeSortedUsers(users, sortBy){
    if(sortBy === '') return users;

    //if(sortBy === "HIGH_TO_LOW") return [...products].sort((productA, productB) => productB.price - productA.price)
    return [...users].sort((userA, userB) => userA.age - userB.age);
}