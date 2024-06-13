const login = document.querySelector("form.Fconnexion");
const signup = document.querySelector("form.Fsignup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const link = document.querySelector(".compte");
const titreC = document.querySelector(".titreCo");
const titreS = document.querySelector(".titreSi");


signupBtn.onclick = (() => {
    login.style.marginLeft = "-50%";
    titreC.style.marginLeft = "-150%";
});

loginBtn.onclick = (() => {
    login.style.marginLeft = "0%";
    titreC.style.marginLeft = "0%";
})

link.onclick = (() => {
    signupBtn.click();
    return false;
});