const getOffenses = async () => {
  try {
    const resp = await (await fetch("http://localhost:3001/cmpd/offenses")).json();
    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const setOffense = (offenseObject) => {
  const offenses = document.querySelector(".offenses");
  const offenseDiv = document.createElement("div");
  offenseDiv.className = "offense";
  offenseDiv.innerHTML = `
        <p class="title">${offenseObject.offense}</p> 
        <p>${offenseObject.actual} offenses</p>
    `;
  offenses.appendChild(offenseDiv);
};

const setOffenses = async () => {
  let offenses;
  try {
    offenses = await getOffenses();
  } catch (error) {
    console.log(error);
    throw error;
  }

  for (const offense of offenses) {
    setOffense(offense);
  }
};

setOffenses();
