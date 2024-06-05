"use strict";
const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");
const th = document.createElement("th");
const thFoot = document.createElement("th");
const tfoot = document.querySelector("tfoot");
th.textContent = thead.rows[0].cells[1].innerText;
thFoot.textContent = th.innerText;
thead.rows[0].cells[4].insertAdjacentElement("beforebegin", th);
tfoot.rows[0].cells[4].insertAdjacentElement("beforebegin", thFoot);
for(let i = 0; i < tbody.rows.length; i++){
    const row = tbody.rows[i];
    const td = document.createElement("td");
    td.textContent = row.cells[1].innerText;
    row.cells[4].insertAdjacentElement("beforebegin", td);
}

//# sourceMappingURL=index.f75de5e1.js.map
