///////////////////////-------1.d Print the total population of countries using reduce function--------------////////////////////////////////////////////

const URL = "https://restcountries.com/v3.1/all";

const xmlReq = new XMLHttpRequest();

xmlReq.open("GET", URL);

xmlReq.send();

// xmlReq.onreadystatechange = () => {
//   console.log(xmlReq.readyState);
// };

xmlReq.onload = () => {
  let obj1 = JSON.parse(xmlReq.response);

  let totalPopulation = obj1.reduce(function (a, obj) {
    return a + obj.population;
  });
  console.log(totalPopulation);
  //console.log(JSON.parse(xmlReq.response));
};
