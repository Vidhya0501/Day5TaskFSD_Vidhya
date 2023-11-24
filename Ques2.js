//2. Create your resume data in JSON format

let my_resume={
    "basics":{
        "name":"Vidhya",
        "DOB":"05.06.1997",
        "Email":"vidhyasuri97@gmail.com",
        "Phone":9159079,
        "Educational Qualification":"M.Sc.,B.Ed (CS)",
        "address":{
            "Street":"217, North Street",
            "City":"Chennai",
            "Pincode":600117,
            "State":"Tamilnadu"
        }
    }
    ,
    "Profiles":{
        "LinkedIn":"https://www.linkedin.com/in/vidhya-s-92884b27b/",
        "Github":"https://github.com/Vidhya0501"
    },
    "Education":{
        "Course":"Msc.,B.Ed",
        "Department":"Computer Science",
        "Institution":"SRC,SASTRA University,Kumbakonam",
        "Academic Year":"2014-2019",
        "CGPA":7.5
    },
    "Work":{
        "Designation":"PGT Teacher",
        "Years of experience": 2,
        "Institution":"National Vidyalaya Senior Secondary School,Kumbakonam",
        "Year":"2019-2021"
    },
    "Skills":[
        {
            "Technoligies":["HTML", "CSS", "Javascript", "React", "Node JS", "MongoDB", "Express JS"]
        },
        {
            "Other Skills":["Time Management","Team coordination"]
        }
    ],
    "Projects":["E-commerce website using Javascript","Blog - designed using React"],
    "Language":["Tamil", "English"],
    "Hobbies":["Listening music", "Reading books"]
}

console.log(my_resume);