async function getGeoFunc(outFunc){
    if ("geolocation" in navigator) {

      let promise = await new Promise((resolve, reject) => {
        let reObj;
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            console.log({output: 'success', lat: lat, lng: lng}, "output")
            reObj = {output: 'success', lat: lat, lng: lng}
            resolve(reObj)
          },
          // Error callback function
          (error) => {
          
             reObj = {output: "error", msg: `Error msg: ${error.message}. Error#: ${error.code}`};
             reject(reObj)
          },
          {timeout:10000}
        );


      })
       

      return promise


    } else {
        return {output: "error", msg:"Geolocation is not supported by this browser."};
      }
  }

  export default getGeoFunc