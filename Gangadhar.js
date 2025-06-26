/*fetch("http://20.244.56.144/evaluation-service/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: "23a95a6117@aec.edu.in",
        name: "Gangadhar Thotakura",
        mobileNo: "9032122585",
        githubUsername: "gangadharthotakura",
        rollNo: "23A95A6117",
        accessCode: "NFwgRT"
    })
})  
.then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(" Success:", data);
})
.catch(error => {
    console.error(" Error:", error);
});*/


/*import fetch from 'node-fetch';

const payload = {
  clientID: "1db5b806-8d40-4568-a206-455bbc5bfa8d",
  clientSecret: "tEdRPeVyQQkbaErc",
  email: "23a95a6117@aec.edu.in",
  name: "Gangadhar Thotakura",
  rollNo: "23A95A6117",
  accessCode: "NFwgRT"
};

fetch("http://20.244.56.144/evaluation-service/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(async (res) => {
    const body = await res.text();
    if (!res.ok) {
      throw new Error(` Failed to authenticate: ${res.status} ${res.statusText}\n${body}`);
    }
    return JSON.parse(body);
  })
  .then(data => {
    console.log("Access Token:", data.access_token || data);
  })
  .catch(err => {
    console.error(err.message);
  }); */

import fetch from 'node-fetch';

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2E5NWE2MTE3QGFlYy5lZHUuaW4iLCJleHAiOjE3NTA5MjIyNjcsImlhdCI6MTc1MDkyMTM2NywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQ0NzY2ZDE5LTJjYWItNGQ3NS1iMDU5LWM1N2U5NDc1ODFkMCIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImdhbmdhZGhhciB0aG90YWt1cmEiLCJzdWIiOiIxZGI1YjgwNi04ZDQwLTQ1NjgtYTIwNi00NTViYmM1YmZhOGQifSwiZW1haWwiOiIyM2E5NWE2MTE3QGFlYy5lZHUuaW4iLCJuYW1lIjoiZ2FuZ2FkaGFyIHRob3Rha3VyYSIsInJvbGxObyI6IjIzYTk1YTYxMTciLCJhY2Nlc3NDb2RlIjoiTkZ3Z1JUIiwiY2xpZW50SUQiOiIxZGI1YjgwNi04ZDQwLTQ1NjgtYTIwNi00NTViYmM1YmZhOGQiLCJjbGllbnRTZWNyZXQiOiJ0RWRSUGVWeVFRa2JhRXJjIn0.fUPJlAb4S0CHtFng68wch83VpDrYPIvocjSThEDXHY0";

const logPayload = {
  stack: "backend",  // or "frontend"
  level: "error",    // debug, info, warn, error, fatal
  package: "handler",
  message: "received string, expected bool"
};

fetch("http://20.244.56.144/evaluation-service/logs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${accessToken}`
  },
  body: JSON.stringify(logPayload)
})
  .then(async res => {
    const text = await res.text();
    if (!res.ok) {
      throw new Error(` Log failed: ${res.status} ${res.statusText}\n${text}`);
    }
    console.log(" Log submitted successfully:\n", text);
  })
  .catch(err => {
    console.error(err.message);
  });
