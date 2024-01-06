//////////////////////////////-----1.c Print the following details name, capital, flag, using forEach function -------//////////////////////////////////////////

const URL = "https://restcountries.com/v3.1/all";

const xmlReq = new XMLHttpRequest();

xmlReq.open("GET", URL);

xmlReq.send();

// xmlReq.onreadystatechange = () => {
//   console.log(xmlReq.readyState);
// };

xmlReq.onload = () => {
  let obj1 = JSON.parse(xmlReq.response);

  let countryDetails = obj1.forEach((obj) => {
    console.log(`
    Country Name is    ::::::> ${obj.name.common}
    Country Captial is ::::::> ${obj.capital}
    Country flag       ::::::> ${obj.flags.png}
                `);
  });

  //console.log(JSON.parse(xmlReq.response));
};
