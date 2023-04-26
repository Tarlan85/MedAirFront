import axios from "axios";
// let API_BASE = "http://localhost:8080/api/"

let API_BASE

axios.get("/localEnv.json").then((res) => {
  API_BASE = res.data.API_BASE;
});

const verificationToken = async (url) => {
  if (url !== "login") {
    try {
      let token = localStorage.getItem("token");
      let res = await axios.get(API_BASE + "token/" + token);
      if (res.data === "ok") {
        return "ok";
      }else if(res.data === "no"){
        localStorage.clear()
        window.location.reload();
       }
    } catch {
      console.log("err in verificationToken");
    }
  }
};

async function sendRequest(url, obj = {}, CRUD = "get") {
  try {
    if(!API_BASE) return 
    let verify = await verificationToken(url);
    if (verify || url === "login") {
      let result = await axios[CRUD](API_BASE + url, obj);
      return result;
    }
  } catch (e) {
    console.log(e);
  }
}

export default sendRequest;
