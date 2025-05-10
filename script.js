
        
        const student=[{firstName:"Rejoice", lastName: "Angbashim", age: 18,
            score1: 50, score2: 70, courses:"English, Physics" }, { firstName:"Daniel", lastName: "John", age: 16,
            score1: 90, score2: 80, courses:["Commerce", "Economics"]  }, { firstName:"Gift", lastName: "Mark", age: 19,
            score1: 40, score2: 66, courses:["Further Maths", "Chemistry"]  }, { firstName:"Chinedu", lastName: "Micheal", age: 17,
            score1: 80, score2: 59, courses:["French", "History"]  },{ firstName:"Godwin", lastName: "Yusuf", age: 20,
            score1: 90, score2: 70, courses:"Maths , Statistics" }]
            const [student1, student2, student3, student4, student5]=student
    
            console.log(student1, student2, student3, student4, student5);
            
    const firstNames=student.map((fName) => fName.firstName);
    const lastNames=student.map((lName) => lName.lastName);
    const ages=student.map((year) => year.age);
    const scores1=student.map((scor) => scor.score1);
    const scores2=student.map((scor) => scor.score2);
    const course=student.map((cour) => cour.courses);
    let studentProfile=`"${firstNames} ${lastNames} is ${ages} years old and scored ${scores1}, 
    ${scores2}. He is taking ${course}"`
    //console.log(`"${firstNames[0]} ${lastNames[0]} "`)
    student.forEach((student1) => console.log(`"${firstNames[0]} ${lastNames[0]} is ${ages[0]} years old and scored ${scores1[0]}, 
    ${scores2[0]}. She is taking ${course[0]}"`))
    student.forEach((student2) => console.log(`"${firstNames[1]} ${lastNames[1]} is ${ages[1]} years old and scored ${scores1[1]}, 
    ${scores2[0]}. He is taking ${course[1]}"`)) 
    student.forEach((student3) => console.log(`"${firstNames[2]} ${lastNames[2]} is ${ages[2]} years old and scored ${scores1[2]}, 
    ${scores2[2]}. She is taking ${course[2]}"`))
    student.forEach((student4) => console.log(`"${firstNames[3]} ${lastNames[3]} is ${ages[3]} years old and scored ${scores1[3]}, 
    ${scores2[3]}. He is taking ${course[3]}"`))
    student.forEach((student5) => console.log(`"${firstNames[4]} ${lastNames[4]} is ${ages[4]} years old and scored ${scores1[4]}, 
    ${scores2[4]}. He is taking ${course[4]}"`))
   
