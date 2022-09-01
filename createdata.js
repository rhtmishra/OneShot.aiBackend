const fs = require('fs');

 const cities = [
    {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India"
    },
    {
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India"
    },
    {
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India"
    },
    {
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India"
    },
    {
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India"
    },
    {
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India"
    },
    {
        "city": "Patna",
        "state": "Bihar",
        "country": "India"
    },
    {
        "city": "Darbhanga",
        "state": "Bihar",
        "country": "India"
    },
    {
        "city": "Munger",
        "state": "Bihar",
        "country": "India"
    },
    {
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India"
    },
    {
        "city": "Allahabad",
        "state": "Uttar Pradesh",
        "country": "India"
    },
    {
        "city": "Kanpur",
        "state": "Uttar Pradesh",
        "country": "India"
    },
    {
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India"
    },
    {
        "city": "jaipur",
        "state": "Rajashtan",
        "country": "India"
    },
    {
        "city": "Bikaner",
        "state": "Rajashtan",
        "country": "India"
    },
    {
        "city": "Ajmer",
        "state": "Rajashtan",
        "country": "India"
    },
    {
        "city": "Chandigarh",
        "state": "Haryana",
        "country": "India"
    },
    {
        "city": "Panji",
        "state": "Goa",
        "country": "India"
    },
    {
        "city": "Raipur",
        "state": "Chhattisgarh",
        "country": "India"
    },
    {
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India"
    },
]

// const courses = ["CS", "IT", "ME", "ECE", "Management", "Business", "EEE"]


// const collegeL = ["IIT", "IIIT", "NIT", "Government Engineering College", "IIM"]
//  const colleges = collegeL.map(college => {
//     return cities.map(c=> {
//         if(college==="IIM"){
//             console.log( {
//                 "name": college+", "+c.city,
//                 "yearFounded": 1900+Math.floor(Math.random() * 100),
//                 "city": c.city,
//                 "state": c.state,
//                 "country": "India",
//                 "numberOfStudents": 100,
//                 "courses": ["CS", "IT", "ME", "ECE", "EEE"].map(d=>d)
//                 }+ ",")
//         }else{
//             console.log({
//                 "name": college+", "+c.city,
//                 "yearFounded": 1900+Math.floor(Math.random() * 100),
//                 "city": c.city,
//                 "state": c.state,
//                 "country": "India",
//                 "numberOfStudents": 100,
//                 "courses": ["Management", "Business"].map(d=>d)
//                 },",")
//         }
       
//     })
   
//  })


 // console.log(colleges)

 const colleges = [
    {
        "name": "IIT, Bangalore",
        "yearFounded": "1903",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4cf",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.325Z",
        "updatedAt": "2022-08-31T21:10:27.325Z"
    },
    {
        "name": "IIT, Mumbai",
        "yearFounded": "1900",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d0",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.330Z",
        "updatedAt": "2022-08-31T21:10:27.330Z"
    },
    {
        "name": "IIT, Pune",
        "yearFounded": "1975",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d1",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.331Z",
        "updatedAt": "2022-08-31T21:10:27.331Z"
    },
    {
        "name": "IIT, Kolkata",
        "yearFounded": "1901",
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d2",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.332Z",
        "updatedAt": "2022-08-31T21:10:27.332Z"
    },
    {
        "name": "IIT, Chennai",
        "yearFounded": "1946",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d3",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.333Z",
        "updatedAt": "2022-08-31T21:10:27.333Z"
    },
    {
        "name": "IIT, Hyderabad",
        "yearFounded": "1983",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d4",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.335Z",
        "updatedAt": "2022-08-31T21:10:27.335Z"
    },
    {
        "name": "IIT, Patna",
        "yearFounded": "1994",
        "city": "Patna",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d5",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.336Z",
        "updatedAt": "2022-08-31T21:10:27.336Z"
    },
    {
        "name": "IIT, Darbhanga",
        "yearFounded": "1928",
        "city": "Darbhanga",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d6",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.337Z",
        "updatedAt": "2022-08-31T21:10:27.337Z"
    },
    {
        "name": "IIT, Munger",
        "yearFounded": "1912",
        "city": "Munger",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d7",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.338Z",
        "updatedAt": "2022-08-31T21:10:27.338Z"
    },
    {
        "name": "IIT, Bhopal",
        "yearFounded": "1958",
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d8",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.339Z",
        "updatedAt": "2022-08-31T21:10:27.339Z"
    },
    {
        "name": "IIT, Allahabad",
        "yearFounded": "1918",
        "city": "Allahabad",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4d9",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.341Z",
        "updatedAt": "2022-08-31T21:10:27.341Z"
    },
    {
        "name": "IIT, Kanpur",
        "yearFounded": "1926",
        "city": "Kanpur",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4da",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.341Z",
        "updatedAt": "2022-08-31T21:10:27.341Z"
    },
    {
        "name": "IIT, Varanasi",
        "yearFounded": "1946",
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4db",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.343Z",
        "updatedAt": "2022-08-31T21:10:27.343Z"
    },
    {
        "name": "IIT, jaipur",
        "yearFounded": "1936",
        "city": "jaipur",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4dc",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.345Z",
        "updatedAt": "2022-08-31T21:10:27.345Z"
    },
    {
        "name": "IIT, Bikaner",
        "yearFounded": "1916",
        "city": "Bikaner",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4dd",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.345Z",
        "updatedAt": "2022-08-31T21:10:27.345Z"
    },
    {
        "name": "IIT, Ajmer",
        "yearFounded": "1961",
        "city": "Ajmer",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4de",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.346Z",
        "updatedAt": "2022-08-31T21:10:27.346Z"
    },
    {
        "name": "IIT, Chandigarh",
        "yearFounded": "1954",
        "city": "Chandigarh",
        "state": "Haryana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4df",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.347Z",
        "updatedAt": "2022-08-31T21:10:27.347Z"
    },
    {
        "name": "IIT, Panji",
        "yearFounded": "1928",
        "city": "Panji",
        "state": "Goa",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e0",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.348Z",
        "updatedAt": "2022-08-31T21:10:27.348Z"
    },
    {
        "name": "IIT, Raipur",
        "yearFounded": "1981",
        "city": "Raipur",
        "state": "Chhattisgarh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e1",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.351Z",
        "updatedAt": "2022-08-31T21:10:27.351Z"
    },
    {
        "name": "IIT, New Delhi",
        "yearFounded": "1991",
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e2",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.352Z",
        "updatedAt": "2022-08-31T21:10:27.352Z"
    },
    {
        "name": "IIT, Bangalore",
        "yearFounded": "1930",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e3",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.354Z",
        "updatedAt": "2022-08-31T21:10:27.354Z"
    },
    {
        "name": "IIIT, Mumbai",
        "yearFounded": "1963",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e4",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.355Z",
        "updatedAt": "2022-08-31T21:10:27.355Z"
    },
    {
        "name": "IIIT, Pune",
        "yearFounded": "1940",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e5",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.356Z",
        "updatedAt": "2022-08-31T21:10:27.356Z"
    },
    {
        "name": "IIIT, Kolkata",
        "yearFounded": "1939",
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e6",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.356Z",
        "updatedAt": "2022-08-31T21:10:27.356Z"
    },
    {
        "name": "IIIT, Chennai",
        "yearFounded": "1963",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e7",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.357Z",
        "updatedAt": "2022-08-31T21:10:27.357Z"
    },
    {
        "name": "IIIT, Hyderabad",
        "yearFounded": "1905",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e8",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.358Z",
        "updatedAt": "2022-08-31T21:10:27.358Z"
    },
    {
        "name": "IIIT, Patna",
        "yearFounded": "1985",
        "city": "Patna",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4e9",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.359Z",
        "updatedAt": "2022-08-31T21:10:27.359Z"
    },
    {
        "name": "IIIT, Darbhanga",
        "yearFounded": "1922",
        "city": "Darbhanga",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4ea",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.360Z",
        "updatedAt": "2022-08-31T21:10:27.360Z"
    },
    {
        "name": "IIIT, Munger",
        "yearFounded": "1923",
        "city": "Munger",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4eb",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.360Z",
        "updatedAt": "2022-08-31T21:10:27.360Z"
    },
    {
        "name": "IIIT, Bhopal",
        "yearFounded": "1964",
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4ec",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.361Z",
        "updatedAt": "2022-08-31T21:10:27.361Z"
    },
    {
        "name": "IIIT, Allahabad",
        "yearFounded": "1995",
        "city": "Allahabad",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4ed",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.362Z",
        "updatedAt": "2022-08-31T21:10:27.362Z"
    },
    {
        "name": "IIIT, Kanpur",
        "yearFounded": "1970",
        "city": "Kanpur",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4ee",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.363Z",
        "updatedAt": "2022-08-31T21:10:27.363Z"
    },
    {
        "name": "IIIT, Varanasi",
        "yearFounded": "1987",
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4ef",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.363Z",
        "updatedAt": "2022-08-31T21:10:27.363Z"
    },
    {
        "name": "IIIT, jaipur",
        "yearFounded": "1982",
        "city": "jaipur",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f0",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.364Z",
        "updatedAt": "2022-08-31T21:10:27.364Z"
    },
    {
        "name": "IIIT, Bikaner",
        "yearFounded": "1968",
        "city": "Bikaner",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f1",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.365Z",
        "updatedAt": "2022-08-31T21:10:27.365Z"
    },
    {
        "name": "IIIT, Ajmer",
        "yearFounded": "1938",
        "city": "Ajmer",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f2",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.367Z",
        "updatedAt": "2022-08-31T21:10:27.367Z"
    },
    {
        "name": "IIIT, Chandigarh",
        "yearFounded": "1966",
        "city": "Chandigarh",
        "state": "Haryana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f3",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.368Z",
        "updatedAt": "2022-08-31T21:10:27.368Z"
    },
    {
        "name": "IIIT, Panji",
        "yearFounded": "1963",
        "city": "Panji",
        "state": "Goa",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f4",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.369Z",
        "updatedAt": "2022-08-31T21:10:27.369Z"
    },
    {
        "name": "IIIT, Raipur",
        "yearFounded": "1919",
        "city": "Raipur",
        "state": "Chhattisgarh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f5",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.370Z",
        "updatedAt": "2022-08-31T21:10:27.370Z"
    },
    {
        "name": "IIIT, New Delhi",
        "yearFounded": "1986",
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f6",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.371Z",
        "updatedAt": "2022-08-31T21:10:27.371Z"
    },
    {
        "name": "NIT, Bangalore",
        "yearFounded": "1905",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f7",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.371Z",
        "updatedAt": "2022-08-31T21:10:27.371Z"
    },
    {
        "name": "NIT, Mumbai",
        "yearFounded": "1939",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f8",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.372Z",
        "updatedAt": "2022-08-31T21:10:27.372Z"
    },
    {
        "name": "NIT, Pune",
        "yearFounded": "1966",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4f9",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.375Z",
        "updatedAt": "2022-08-31T21:10:27.375Z"
    },
    {
        "name": "NIT, Kolkata",
        "yearFounded": "1958",
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4fa",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.376Z",
        "updatedAt": "2022-08-31T21:10:27.376Z"
    },
    {
        "name": "NIT, Chennai",
        "yearFounded": "1921",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4fb",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.376Z",
        "updatedAt": "2022-08-31T21:10:27.376Z"
    },
    {
        "name": "NIT, Hyderabad",
        "yearFounded": "1905",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4fc",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.377Z",
        "updatedAt": "2022-08-31T21:10:27.377Z"
    },
    {
        "name": "NIT, Patna",
        "yearFounded": "1945",
        "city": "Patna",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4fd",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.378Z",
        "updatedAt": "2022-08-31T21:10:27.378Z"
    },
    {
        "name": "NIT, Darbhanga",
        "yearFounded": "1961",
        "city": "Darbhanga",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4fe",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.379Z",
        "updatedAt": "2022-08-31T21:10:27.379Z"
    },
    {
        "name": "NIT, Munger",
        "yearFounded": "1941",
        "city": "Munger",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e4ff",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.379Z",
        "updatedAt": "2022-08-31T21:10:27.379Z"
    },
    {
        "name": "NIT, Bhopal",
        "yearFounded": "1902",
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e500",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.380Z",
        "updatedAt": "2022-08-31T21:10:27.380Z"
    },
    {
        "name": "NIT, Allahabad",
        "yearFounded": "1950",
        "city": "Allahabad",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e501",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.380Z",
        "updatedAt": "2022-08-31T21:10:27.380Z"
    },
    {
        "name": "NIT, Kanpur",
        "yearFounded": "1951",
        "city": "Kanpur",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e502",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.381Z",
        "updatedAt": "2022-08-31T21:10:27.381Z"
    },
    {
        "name": "NIT, Varanasi",
        "yearFounded": "1940",
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e503",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.382Z",
        "updatedAt": "2022-08-31T21:10:27.382Z"
    },
    {
        "name": "NIT, jaipur",
        "yearFounded": "1916",
        "city": "jaipur",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e504",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.383Z",
        "updatedAt": "2022-08-31T21:10:27.383Z"
    },
    {
        "name": "NIT, Bikaner",
        "yearFounded": "1903",
        "city": "Bikaner",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e505",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.384Z",
        "updatedAt": "2022-08-31T21:10:27.384Z"
    },
    {
        "name": "NIT, Ajmer",
        "yearFounded": "1906",
        "city": "Ajmer",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e506",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.384Z",
        "updatedAt": "2022-08-31T21:10:27.384Z"
    },
    {
        "name": "NIT, Chandigarh",
        "yearFounded": "1962",
        "city": "Chandigarh",
        "state": "Haryana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e507",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.385Z",
        "updatedAt": "2022-08-31T21:10:27.385Z"
    },
    {
        "name": "NIT, Panji",
        "yearFounded": "1966",
        "city": "Panji",
        "state": "Goa",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e508",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.386Z",
        "updatedAt": "2022-08-31T21:10:27.386Z"
    },
    {
        "name": "NIT, Raipur",
        "yearFounded": "1948",
        "city": "Raipur",
        "state": "Chhattisgarh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e509",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.386Z",
        "updatedAt": "2022-08-31T21:10:27.386Z"
    },
    {
        "name": "NIT, New Delhi",
        "yearFounded": "1947",
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e50a",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.387Z",
        "updatedAt": "2022-08-31T21:10:27.387Z"
    },
    {
        "name": "Government Engineering College, Bangalore",
        "yearFounded": "1939",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e50b",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.387Z",
        "updatedAt": "2022-08-31T21:10:27.387Z"
    },
    {
        "name": "Government Engineering College, Mumbai",
        "yearFounded": "1915",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e50c",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.388Z",
        "updatedAt": "2022-08-31T21:10:27.388Z"
    },
    {
        "name": "Government Engineering College, Pune",
        "yearFounded": "1948",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e50d",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.388Z",
        "updatedAt": "2022-08-31T21:10:27.388Z"
    },
    {
        "name": "Government Engineering College, Kolkata",
        "yearFounded": "1912",
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e50e",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.389Z",
        "updatedAt": "2022-08-31T21:10:27.389Z"
    },
    {
        "name": "Government Engineering College, Chennai",
        "yearFounded": "1900",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e50f",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.391Z",
        "updatedAt": "2022-08-31T21:10:27.391Z"
    },
    {
        "name": "Government Engineering College, Hyderabad",
        "yearFounded": "1918",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e510",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.392Z",
        "updatedAt": "2022-08-31T21:10:27.392Z"
    },
    {
        "name": "Government Engineering College, Patna",
        "yearFounded": "1943",
        "city": "Patna",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e511",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.392Z",
        "updatedAt": "2022-08-31T21:10:27.392Z"
    },
    {
        "name": "Government Engineering College, Darbhanga",
        "yearFounded": "1934",
        "city": "Darbhanga",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e512",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.393Z",
        "updatedAt": "2022-08-31T21:10:27.393Z"
    },
    {
        "name": "Government Engineering College, Munger",
        "yearFounded": "1907",
        "city": "Munger",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e513",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.393Z",
        "updatedAt": "2022-08-31T21:10:27.393Z"
    },
    {
        "name": "Government Engineering College, Bhopal",
        "yearFounded": "1997",
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e514",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.393Z",
        "updatedAt": "2022-08-31T21:10:27.393Z"
    },
    {
        "name": "Government Engineering College, Allahabad",
        "yearFounded": "1999",
        "city": "Allahabad",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e515",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.394Z",
        "updatedAt": "2022-08-31T21:10:27.394Z"
    },
    {
        "name": "Government Engineering College, Kanpur",
        "yearFounded": "1905",
        "city": "Kanpur",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e516",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.394Z",
        "updatedAt": "2022-08-31T21:10:27.394Z"
    },
    {
        "name": "Government Engineering College, Varanasi",
        "yearFounded": "1955",
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e517",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.394Z",
        "updatedAt": "2022-08-31T21:10:27.394Z"
    },
    {
        "name": "Government Engineering College, jaipur",
        "yearFounded": "1945",
        "city": "jaipur",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e518",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.395Z",
        "updatedAt": "2022-08-31T21:10:27.395Z"
    },
    {
        "name": "Government Engineering College, Bikaner",
        "yearFounded": "1915",
        "city": "Bikaner",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e519",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.395Z",
        "updatedAt": "2022-08-31T21:10:27.395Z"
    },
    {
        "name": "Government Engineering College, Ajmer",
        "yearFounded": "1916",
        "city": "Ajmer",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e51a",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.396Z",
        "updatedAt": "2022-08-31T21:10:27.396Z"
    },
    {
        "name": "Government Engineering College, Chandigarh",
        "yearFounded": "1937",
        "city": "Chandigarh",
        "state": "Haryana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e51b",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.398Z",
        "updatedAt": "2022-08-31T21:10:27.398Z"
    },
    {
        "name": "Government Engineering College, Panji",
        "yearFounded": "1961",
        "city": "Panji",
        "state": "Goa",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e51c",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.399Z",
        "updatedAt": "2022-08-31T21:10:27.399Z"
    },
    {
        "name": "Government Engineering College, Raipur",
        "yearFounded": "1928",
        "city": "Raipur",
        "state": "Chhattisgarh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e51d",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.399Z",
        "updatedAt": "2022-08-31T21:10:27.399Z"
    },
    {
        "name": "Government Engineering College, New Delhi",
        "yearFounded": "1923",
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "Management",
            "Business"
        ],
        "_id": "630fce430361d02bc531e51e",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.400Z",
        "updatedAt": "2022-08-31T21:10:27.400Z"
    },
    {
        "name": "IIM, Bangalore",
        "yearFounded": "1911",
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e51f",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.400Z",
        "updatedAt": "2022-08-31T21:10:27.400Z"
    },
    {
        "name": "IIM, Mumbai",
        "yearFounded": "1923",
        "city": "Mumbai",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e520",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.401Z",
        "updatedAt": "2022-08-31T21:10:27.401Z"
    },
    {
        "name": "IIM, Pune",
        "yearFounded": "1985",
        "city": "Pune",
        "state": "Maharashtra",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e521",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.402Z",
        "updatedAt": "2022-08-31T21:10:27.402Z"
    },
    {
        "name": "IIM, Kolkata",
        "yearFounded": "1959",
        "city": "Kolkata",
        "state": "West Bengal",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e522",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.403Z",
        "updatedAt": "2022-08-31T21:10:27.403Z"
    },
    {
        "name": "IIM, Chennai",
        "yearFounded": "1904",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e523",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.403Z",
        "updatedAt": "2022-08-31T21:10:27.403Z"
    },
    {
        "name": "IIM, Hyderabad",
        "yearFounded": "1968",
        "city": "Hyderabad",
        "state": "Telangana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e524",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.404Z",
        "updatedAt": "2022-08-31T21:10:27.404Z"
    },
    {
        "name": "IIM, Patna",
        "yearFounded": "1902",
        "city": "Patna",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e525",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.405Z",
        "updatedAt": "2022-08-31T21:10:27.405Z"
    },
    {
        "name": "IIM, Darbhanga",
        "yearFounded": "1992",
        "city": "Darbhanga",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e526",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.405Z",
        "updatedAt": "2022-08-31T21:10:27.405Z"
    },
    {
        "name": "IIM, Munger",
        "yearFounded": "1902",
        "city": "Munger",
        "state": "Bihar",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e527",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.406Z",
        "updatedAt": "2022-08-31T21:10:27.406Z"
    },
    {
        "name": "IIM, Bhopal",
        "yearFounded": "1956",
        "city": "Bhopal",
        "state": "Madhya Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e528",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.407Z",
        "updatedAt": "2022-08-31T21:10:27.407Z"
    },
    {
        "name": "IIM, Allahabad",
        "yearFounded": "1958",
        "city": "Allahabad",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e529",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.407Z",
        "updatedAt": "2022-08-31T21:10:27.407Z"
    },
    {
        "name": "IIM, Kanpur",
        "yearFounded": "1938",
        "city": "Kanpur",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e52a",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.408Z",
        "updatedAt": "2022-08-31T21:10:27.408Z"
    },
    {
        "name": "IIM, Varanasi",
        "yearFounded": "1970",
        "city": "Varanasi",
        "state": "Uttar Pradesh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e52b",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.412Z",
        "updatedAt": "2022-08-31T21:10:27.412Z"
    },
    {
        "name": "IIM, jaipur",
        "yearFounded": "1901",
        "city": "jaipur",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e52c",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.412Z",
        "updatedAt": "2022-08-31T21:10:27.412Z"
    },
    {
        "name": "IIM, Bikaner",
        "yearFounded": "1908",
        "city": "Bikaner",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e52d",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.413Z",
        "updatedAt": "2022-08-31T21:10:27.413Z"
    },
    {
        "name": "IIM, Ajmer",
        "yearFounded": "1928",
        "city": "Ajmer",
        "state": "Rajashtan",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e52e",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.415Z",
        "updatedAt": "2022-08-31T21:10:27.415Z"
    },
    {
        "name": "IIM, Chandigarh",
        "yearFounded": "1966",
        "city": "Chandigarh",
        "state": "Haryana",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e52f",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.416Z",
        "updatedAt": "2022-08-31T21:10:27.416Z"
    },
    {
        "name": "IIM, Panji",
        "yearFounded": "1950",
        "city": "Panji",
        "state": "Goa",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e530",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.417Z",
        "updatedAt": "2022-08-31T21:10:27.417Z"
    },
    {
        "name": "IIM, Raipur",
        "yearFounded": "1959",
        "city": "Raipur",
        "state": "Chhattisgarh",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e531",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.418Z",
        "updatedAt": "2022-08-31T21:10:27.418Z"
    },
    {
        "name": "IIM, New Delhi",
        "yearFounded": "1947",
        "city": "New Delhi",
        "state": "Delhi",
        "country": "India",
        "numberOfStudents": 100,
        "courses": [
            "CS",
            "IT",
            "ME",
            "ECE",
            "EEE"
        ],
        "_id": "630fce430361d02bc531e532",
        "__v": 0,
        "createdAt": "2022-08-31T21:10:27.419Z",
        "updatedAt": "2022-08-31T21:10:27.419Z"
    }
]

const students = [  
    {  
       name:'arun',
       gender:'Male',
       physics:88,
       maths:87,
       english:78
    },
    {  
       name:'rajesh',
       gender:'Male',
       physics:96,
       maths:100,
       english:95
    },
    {  
       name:'moorthy',
       gender:'Male',
       physics:89,
       maths:90,
       english:70
    },
    {  
       name:'raja',
       gender:'Male',
       physics:30,
       maths:25,
       english:40
    },
    {  
       name:'usha',
       gender:'Female',
       physics:67,
       maths:45,
       english:78
    },
    {  
       name:'priya',
       gender:'Female',
       physics:56,
       maths:46,
       english:78
    },
    {  
       name:'Sundar',
       gender:'Male',
       physics:12,
       maths:67,
       english:67
    },
    {  
       name:'Kavitha',
       gender:'Female',
       physics:78,
       maths:71,
       english:67
    },
    {  
       name:'Dinesh',
       gender:'Male',
       physics:56,
       maths:45,
       english:67
    },
    {  
       name:'Hema',
       gender:'Female',
       physics:71,
       maths:90,
       english:23
    },
    {  
       name:'Gowri',
       gender:'Female',
       physics:100,
       maths:100,
       english:100
    },
    {  
       name:'Ram',
       gender:'Male',
       physics:78,
       maths:55,
       english:47
    },
    {  
       name:'Murugan',
       gender:'Male',
       physics:34,
       maths:89,
       english:78
    },
    {  
       name:'Jenifer',
       gender:'Female',
       physics:67,
       maths:88,
       english:90
    }
 ]


colleges.map(college=> {
    students.map(s=> {
        // console.log({
        //     name: s.name,
        //     yearOfbatch: 2010+Math.floor(Math.random() * 10),
        //     collegeId: college._id,
        //     skills: ["Java", "Python", "SQL", "React", "Node"],
        // }, ",")

        fs.appendFileSync("./data/student.json",JSON.stringify({
            name: s.name,
            yearOfbatch: 2010+Math.floor(Math.random() * 10),
            collegeId: college._id,
            skills: ["Java", "Python", "SQL", "React", "Node"],
        })+",\n")
    })
})