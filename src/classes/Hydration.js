


class Hydration{
    constructor(data){
        this.data= data;
    }


    findAvgFLuidOzs(id){
        console.log({id})
        // console.log("this.data", this.data)
      let usersH2oInfo = this.data.filter((hydro) => 
      {
    //    console.log({hydro})
    //    console.log("hydro.userID", hydro.userID)

      if(hydro.userID === id){ 
         console.log("yes")
        return hydro
        }
      }) 
    //   console.log(usersH2oInfo)
     return usersH2oInfo
}
    // we need to find the user by id
    // then we need to iterate over total user hydration entries
    // add the hydration enntries and divide by total length of entries
}

export default Hydration
