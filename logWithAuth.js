import fetch from 'node-fetch';

const authPayload = {
  clientID: "1db5b806-8d40-4568-a206-455bbc5bfa8d",
  clientSecret: "tEdRPeVyQQkbaErc",
  email: "23a95a6117@aec.edu.in",
  name: "Gangadhar Thotakura",
  rollNo: "23A95A6117",
  accessCode: "NFwgRT"
};

async function run() {
  try {
    // 1. Get fresh token
    const authRes = await fetch("http://20.244.56.144/evaluation-service/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authPayload)
    });

    const authData = await authRes.json();

    if (!authRes.ok || !authData.access_token) {
      throw new Error(" Auth failed: " + JSON.stringify(authData));
    }

    const accessToken = authData.access_token;
    console.log(" Auth success. Access token received.");

    // 2. Log request
    const logPayload = {
      stack: "backend",
      level: "error",
      package: "handler",
      message: "received string, expected bool"
    };

    const logRes = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify(logPayload)
    });

    const logBody = await logRes.text();
    if (!logRes.ok) {
      throw new Error(` Log failed: ${logRes.status} ${logRes.statusText}\n${logBody}`);
    }

    console.log(" Log submitted successfully:\n", logBody);
  } catch (err) {
    console.error(err.message);
  }
}

run();
