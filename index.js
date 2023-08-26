function renderUserId(outPut) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = `${outPut}`;
    div.appendChild(h1);
    document.querySelector('body').appendChild(div);
}
function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    }).then(resp => resp.json())
        .then(user => renderUserId(user.id))
        .catch(err => renderUserId(err.message));
}
submitData("Oualid", "Oualid@email.ih");