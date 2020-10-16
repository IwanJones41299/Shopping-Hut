export default {
  getFruitVegList: () => {
    return fetch("user/lists").then((response) => {
      if (response.status != 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthroized" }, msgBody: true };
    });
  },
  postFruitVegList: (list) => {
    return fetch("/user/list", {
      method: "post",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application",
      },
    }).then((response) => {
      if (response.status != 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthroized" }, msgBody: true };
    });
  },
};
