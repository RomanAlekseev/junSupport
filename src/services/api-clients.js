
  /* метод makeRequest делает запрос и получает информацию
  // {
    //     post: true,
    //     body: '',
    //     queryParams: {
      //         author: '',
      //         message: '',
      //     }
      // }
      */
     
     class ApiClient {
     async makeRequest(route, optionsObj = {post: false, queryParams: {}}) {
      let res;
      const apiBase = "http://localhost:3001/";
      let url = `${apiBase}${route}`;

      //Query parms
      if(!optionsObj.post){
        let params = optionsObj.queryParams;
        let paramsLength = Object.keys(params).length
        let qs = '?'
        for(let key in params){
          if(paramsLength === Object.keys(params).length && paramsLength > 0){
            url += qs;
          }
          url += `${key}=${params[key]}`
          if(paramsLength > 1){
            url += "&";
          }
          --paramsLength
        }
        res = await fetch(url);
      }
      if(optionsObj.post){
          const body = optionsObj.body;
          res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      //     
      if (!res.ok) {
        throw new Error(
          `Could not fetch ${this._apiBase}`
        );
      }
  
       const responseJSON = await res.json();
  
       return responseJSON;
    }
  }
  
  const Singleton = (function() {
    var instance;
  
    const createInstance = () => {
      return new ApiClient();
    };
  
    return {
      makeClient: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  export default Singleton;
  