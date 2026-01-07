// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// 공공데이터 API 정보
const FOOD_API =
  "https://apis.data.go.kr/6260000/FoodService/getFoodServiceList";

const SERVICE_KEY =
  "64dfa8ddd0226789d625e94b0537771b1f1d70d23e68899d4914267475e8398d";

// 정적 파일 제공
app.use(express.static("public"));

// 공공데이터 프록시 API
app.get("/api/foods", async (req, res) => {
  try {
    const url =
      `${FOOD_API}?serviceKey=${SERVICE_KEY}` +
      `&pageNo=1&numOfRows=30&resultType=json`;

    const response = await fetch(url);
    const data = await response.json();

    // 실제 리스트 데이터만 전달
    res.json(data.getFoodServiceList.item);
  } catch (err) {
    res.status(500).json({ error: "공공데이터 호출 실패" });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행중 → http://localhost:${PORT}`);
});
