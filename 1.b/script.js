///////////////////////////////////----- 1.b Get all the countries with a population of less than 2 lakhs using Filter function------///////////////////////////

const URL = "https://restcountries.com/v3.1/all";

const xmlReq = new XMLHttpRequest();

xmlReq.open("GET", URL);

xmlReq.send();

// xmlReq.onreadystatechange = () => {
//   console.log(xmlReq.readyState);
// };

xmlReq.onload = () => {
  let obj1 = JSON.parse(xmlReq.response);

  let countryNameOnly = obj1.filter(function (obj) {
    if (obj.population < 200000) {
      console.log(obj.name.common); /// print country names Only with below population of 2lakh .
    }
  });

  let countryFullDetails = obj1.filter((obj) => obj.population < 200000); //Print Countries full details with object  format with below population of 2lakh .
  console.log(countryFullDetails);
  //console.log(JSON.parse(xmlReq.response));
};
