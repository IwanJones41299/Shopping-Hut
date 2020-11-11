export default {

  getFruitVeg : () => {
    return fetch('/user/fruitvegList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postFruitVeg : fruitVegItem => {
    return fetch('/user/fruitvegItems', {
      method : "post",
      body : JSON.stringify(fruitVegItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getFreshFood : () => {
    return fetch('/user/freshfoodList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postFreshFood : freshFoodItem => {
    return fetch('/user/freshfoodItems', {
      method : "post",
      body : JSON.stringify(freshFoodItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getFrozenFood : () => {
    return fetch('/user/frozenfoodList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postFrozenFood : frozenFoodItem => {
    return fetch('/user/frozenfoodItems', {
      method : "post",
      body : JSON.stringify(frozenFoodItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getBakery : () => {
    return fetch('/user/bakeryList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postBakery : bakeryItem => {
    return fetch('/user/bakeryItems', {
      method : "post",
      body : JSON.stringify(bakeryItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getDriedFood : () => {
    return fetch('/user/driedfoodList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postDriedFood : driedFoodItem => {
    return fetch('/user/driedfoodItems', {
      method : "post",
      body : JSON.stringify(driedFoodItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getDrinksConfectionary : () => {
    return fetch('/user/drinksconfectionaryList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postDrinksConfectionary : drinksConfectionaryItem => {
    return fetch('/user/drinksconfectionaryItems', {
      method : "post",
      body : JSON.stringify(drinksConfectionaryItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getHouseHold : () => {
    return fetch('/user/toiletriescleaningList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postHouseHold : toiletriesCleaningItem => {
    return fetch('/user/toiletriescleaningItems', {
      method : "post",
      body : JSON.stringify(toiletriesCleaningItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  },

  getPets : () => {
    return fetch('/user/petList')
      .then(response => {
        if(response.status != 401){
          return response.json().then(data => data);
        }
        else
          return {message : {msgBody : "Unauthorized"}, msgError : true};
      });
  },

  postPets : petsItem => {
    return fetch('/user/petItems', {
      method : "post",
      body : JSON.stringify(petsItem),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then(response => {
      if(response.status != 401){
        return response.json().then(data => data);
      }
      else
        return {message : {msgBody : "Unauthorized"}, msgError : true};
    });
  }
  
  
}