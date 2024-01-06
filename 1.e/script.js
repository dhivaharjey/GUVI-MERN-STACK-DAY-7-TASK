///////////////////////-------1.e Print the country that uses US dollars as currency.--------------////////////////////////////////////////////

const URL = "https://restcountries.com/v2/all";

const xmlReq = new XMLHttpRequest();

xmlReq.open("GET", URL);

xmlReq.send();

// xmlReq.onreadystatechange = () => {
//   console.log(xmlReq.readyState);
// };

xmlReq.onload = () => {
  let obj1 = JSON.parse(xmlReq.response);

  obj1.filter((element) => {
    // console.log(element);
    // console.log(element.currencies);
    // object
    for (let key in element.currencies) {
      // console.log(key);
      if (element.currencies[key].code === "USD") {
        console.log(element.name);
      }
    }
  });
};
