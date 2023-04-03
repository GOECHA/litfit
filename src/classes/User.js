


class User{
    constructor({id, name,  address, email, strideLength, dailyStepGoal, friends}){
        this.id = id,
        this.name = name,
        this.address = address,
        this.email = email,
        this.strideLength = strideLength,
        this.dailyStepGoal = dailyStepGoal,
        this.friends = friends || []

    }

    findUserData(allUserData, id){
     return allUserData.find(user => user.id === id)
    }

    findAvgStepGoal(allUserData){
        
    const totalStepGoal =  allUserData.reduce((acc, user) => {
        acc = acc += user.dailyStepGoal

        return acc 

        }, 0)

        return (totalStepGoal / allUserData.length)
    }


   findUserFirstName(){
    return this.name.split(" ")[0]
   } 

}

export default User;