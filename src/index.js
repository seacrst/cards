import { root, button, data, changeButtonsValue, config } from "./modules/config.js";
// import Dashboard from "./modules/Dashboard.js";
import Client from "./modules/Client.js";
import Modal from "./modules/Modal.js";
import { Form } from "./modules/components.js";
import Visit from "./modules/Visit.js";
import VisitCardiologist from "./modules/VisitCardiologist.js";
import VisitDentist from "./modules/VisitDentist.js";

const client = new Client({});
onload = (config.token() ?? client.setUp());

// onchange = (config.token()?? changeButtonsValue());

// client.auth()
<<<<<<< HEAD
// const visit = new Visit({})
const form = new Modal({place: root, id: "test", title: "test", className: "test"});
form.add()
form.input({})
=======
const visit = new VisitCardiologist();
// const visitD = new VisitDentist();
>>>>>>> visits




// =========================================
// const form = new Form(root, "test-form");
// const elt = new Modal({place: root, id: "bbb", title: "bottle"});
// elt.input({id: "test-id", type: "text", placeholder: "test placeHolder"});
// elt.selectDoctor("select-test-doctor");
// elt.selectUrgency("select-test-urgency");
// elt.textArea("test-textarea");
// config.submitVisit.place = elt.wrap("test-class");
// elt.button(config.submitVisit);
// elt.button("test-button")
// =========================================

// const dashboard = new Dashboard({});


// onload = (config.token() !== null || config.element("button").textContent === "Створити візит" ?
// () => {
//     dashboard.update();
//     dashboard.create();
//     document.querySelector("#dashboard").insertAdjacentHTML("afterend", `<button id="reload-dashboard">Оновити</button>`);
//     document.querySelector("#reload-dashboard").addEventListener("click", reload);
//     function reload (event) {
//         config.element("search").remove();
//         config.element("dashboard").remove();
//         dashboard.update();
//     }
// } : new Promise((next => {
//         loginOrCreate.addEventListener("click", login);
//         // next();
// })).then(async () => {
//     dashboard.update();
//     dashboard.create();
// }));
