const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const PORT = 3000;

/* ⚠️ 서울시 공공주차장 API 키 */
const SEOUL_API_KEY = "여기에_서울_API_키";

app.use(cors());
app.use(express.static(__dirname));

app.get("/api/parking", async (req, res) => {
  try {
    const url =
      `http://openapi.seoul.go.kr:8088/${SEOUL_API_KEY}/json/GetParkingInfo/1/30`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.GetParkingInfo) {
      return res.json([]);
    }

    res.json(data.GetParkingInfo.row);
  } catch (e) {
    res.json([]);
  }
});

app.listen(PORT, () => {
  console.log("🚗 서버 실행됨 👉 http://localhost:3000");
});
