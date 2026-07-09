function updateStudentProfile(profile, updates){
    let result = map(object =>{
    if(updates.id){
        profile.id = updates.id
    }
    if(updates.name){
        profile.name = updates.name.trim()
    }
    if(updates.grade && (updates.grade < 100 && updates.grade > 0)){
        profile.grade = updates.grade
    }

    })

    return profile
}


const profile = {
  id: 1,
  name: "Alice",
  grade: 85
};

const updates = {
  name: "  Alice Johnson  ",
  grade: -123,
  age: 20
};

console.log(updateStudentProfile(profile, updates))

/*
Expected outcome
{
  id: 1,
  name: "Alice Johnson",
  grade: 90
}
*/
// if(updates.name){console.log(`nnm`)}



