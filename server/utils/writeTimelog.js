import { writeFile } from "fs";
import path from "path";
//장소별 실시간 정보 + XML 파싱 to JSON

export const testWriteTimeLog = async (timelog) => {

  const curr = new Date();
  
  // 2. UTC 시간 계산
  const utc = 
        curr.getTime() + 
        (curr.getTimezoneOffset() * 60 * 1000);
  
  // 3. UTC to KST (UTC + 9시간)
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = 
        new Date(utc + (KR_TIME_DIFF)).toLocaleString();

  // DB json 파일 저장
  writeFile(path.resolve('../DB','timeLog.json'),JSON.stringify(kr_curr), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(kr_curr, '실행완료!')
    }
  });

}