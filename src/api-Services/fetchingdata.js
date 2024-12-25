async function fetchingData(){
  try { 
   let response = await fetch("https://api.sampleapis.com/beers/ale")
   let data = await response.json()
   console.log(data)
   return data
  }catch(err){
    console.log(err)
  }
  
}

export {fetchingData}