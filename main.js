function createPopup (title, msg) {
    const div = document.createElement('div');
    div.classList.add('popup');

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    closeBtn.classList.add('close');
    div.appendChild(closeBtn);

    const h2 = document.createElement('h2');
    h2.textContent = title;
    div.appendChild(h2);

    const greetingMsg = msg;
    div.append(greetingMsg);

    document.body.appendChild(div);

    closeBtn.onclick = _ => div.remove();
}

const popup1 = setTimeout(createPopup, 15000, 'احلى 17 دي و لا اي', 'انزل بالتورته يبني بسرعااااااه');
