function makeFriendsList(friends) {
  const friendsList = document.createElement('ul');
  friends.forEach(element => {
    const friendsListItem = document.createElement('li');
    friendsListItem.textContent = `${element.firstName} ${element.lastName}`;
    friendsList.append(friendsListItem);
  });
  return friendsList;
}
