//////////////////////----1.a Get all the countries from Asia continent /region using Filter function-----///////////////////////////////////////////

const URL = "https://restcountries.com/v3.1/all";

const xmlReq = new XMLHttpRequest();

xmlReq.open("GET", URL);

xmlReq.send();

// xmlReq.onreadystatechange = () => {
//   console.log(xmlReq.readyState);
// };

xmlReq.onload = () => {
  const obj1 = JSON.parse(xmlReq.response);

  let countryNameOnly = obj1.filter(function (obj) {
    if (obj.continents == "Asia") {
      console.log(obj.name.common); /// print country names Only ,the countries is in the ASIAN continent.
    }
  });

  let countriesFullDetails = obj1.filter((obj) => obj.continents == "Asia"); ////Print all the details of the coutries that's in the ASIAN continent
  console.log(countriesFullDetails);
  //console.log(JSON.parse(xmlReq.response));
};
