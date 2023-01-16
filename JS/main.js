const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#emailAddress");
const password = document.querySelector("#password");
const pError = document.querySelectorAll(".error");
const form = document.querySelector("form");

const reg =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let errorNumb;

const submitFn = (e) => {
	e.preventDefault();
	firstName.value === "" ? errorAdd(firstName) : errorRemove(firstName);
	lastName.value === "" ? errorAdd(lastName) : errorRemove(lastName);
	password.value === "" ? errorAdd(password) : errorRemove(password);
	!reg.test(email.value) ? errorAdd(email) : errorRemove(email);
	errorCount();
};

const errorAdd = (element) => {
	element.style.color = "red";
	element.placeholder = "";
	element.nextElementSibling.classList.remove("notActive");
};
const errorRemove = (element) => {
	element.style.color = "";
	element.nextElementSibling.classList.add("notActive");
};

const errorCount = () => {
	errorNumb = 0;
	for (let el of pError) {
		if (!el.classList.contains("notActive")) {
			errorNumb++;
		}
	}
	if (errorNumb === 0) {
		for (let el of pError) {
			el.previousElementSibling.value = "";
		}
		form.submit();
	}
};

document.addEventListener("submit", submitFn);
