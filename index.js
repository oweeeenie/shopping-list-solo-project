const footer_container = document.createElement("div");
footer_container.id = "footer-container";

const footer = document.createElement("footer");
footer.id = "footer";
footer.innerHTML = "<p>© 2024 Owen's Shopping List. All rights reserved.</p>"

document.body.appendChild(footer_container);
footer_container.appendChild(footer);
