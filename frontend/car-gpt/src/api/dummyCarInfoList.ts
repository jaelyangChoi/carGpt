/*
추천 차량 정보 dummy data
@author 조혜안
@since 2023.11.26
*/
export default function dummyCsmrDetailInfo() {
  const dummyData = [
    {
      carId: "Car001",
      carNm: "GV70",
      crmVehlCd: "차종대표코드1",
      carImg: "GV70_이미지.jpg",
      fuelEffic: "15km/L",
      fuel: "휘발유",
      reason: "좋은 연비와 편안함",
    },
    {
      carId: "Car002",
      carNm: "SUV",
      crmVehlCd: "차종대표코드2",
      carImg: "SUV_이미지.jpg",
      fuelEffic: "12km/L",
      fuel: "경유",
      reason: "넓고 야외 활동에 적합함",
    },
    {
      carId: "Car003",
      carNm: "해치백",
      crmVehlCd: "차종대표코드3",
      carImg: "해치백_이미지.jpg",
      fuelEffic: "18km/L",
      fuel: "휘발유",
      reason: "도심 주행에 적합하고 연비 좋음",
    },
  ];

  return dummyData;
}
