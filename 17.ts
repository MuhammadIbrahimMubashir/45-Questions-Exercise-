console.log("Unfortunately, I can only invite two people for dinner.");

while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guest.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guest.splice(0, guest.length);
console.log(guest); // Shows an empty list