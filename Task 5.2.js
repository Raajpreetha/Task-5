let resume_Raajalakshme ={
  "name": "Raajalakshme T M",
  "contact": {
    "email": "Preethamahadev@gmail.com",
    "phone": 8056713027 ,
    "address": "Pallikaranai, Chennai"
  },
  "summary": "Experienced in handling people",
  "education": [
    {
      "degree": "Bachelor of engineering in Computer Science",
      "school": "Anna university",
      "graduationYear": 2017
    }
  ],
  "experience": [
    {
      "title": "Relationship Lead",
      "company": "Cloudify Technologies PVt ltd",
      "startDate": "2022-15-11",
      "endDate": "2024-08-31",
    },
    {
      "title": "Guest lecturer",
      "company": "Govt poly college,Cheyyar",
      "startDate": "2021-15-013",
      "endDate": "2022-30-09",

    }
  ],
  "skills": [
    "JavaScript",

    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "Git"
  ]
}

//for loop
console.log("Using for loop:");
let keys = Object.keys(resume_Raajalakshme);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(key , ':', resume_Raajalakshme[key]);
}

//for in loop
console.log("Using for...in loop:");
for (let key in resume_Raajalakshme) {
    console.log(key , ':', resume_Raajalakshme[key]);
}

//for of loop
console.log("Using for...of loop:");
for (let [key, value] of Object.entries(resume_Raajalakshme)) {
    console.log(key ,':', value);
}

//Foreach loop
console.log("Using forEach loop:");
Object.entries(resume_Raajalakshme).forEach(([key, value]) => {
    console.log(key , ':', value);
});


