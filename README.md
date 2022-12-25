# 🏆️ 프리랭킹
**주식, 스포츠 경기 등의 결과를 예측하고, 적중에 따른 점수를 통해 유저간에 경쟁할 수 있는 플랫폼**

📌 경제, 스포츠, 문화/예술, 사회 현상 등 다양한 분야에 대해 예측하고 다른 사람들과 경쟁할 수 있습니다.

📌 유저별 예측 이력과 결과를 조회할 수 있으며, 이를 통해 해당 분야에 대한 예측 실력을 증명하는 인증 수단의 기능을 할 수 있습니다.

## 🚀 배포 링크
https://preranking.shop/

## 🏷 프로젝트 개요
- 개발 기간: 2022.11.22 ~ 진행중
- 개발 인원: 1명 (개인 프로젝트)
- [프리랭킹 백엔드 Repository](https://github.com/tesseractjh/pre-ranking-be)

## 🛠 기술 스택
### 프론트엔드
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=Styled-Components&logoColor=white"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-3578e5?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/D3-f9a03c?style=flat-square&logo=D3.js&logoColor=white"/>
</div>

### 백엔드
<div>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=Passport&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS S3-569A31?style=flat-square&logo=AmazonS3&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS EC2-FF9900?style=flat-square&logo=AmazonEC2&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS RDS-527FFF?style=flat-square&logo=AmazonRDS&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS Route53-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/>
<img src="https://img.shields.io/badge/AWS CloudFront-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/>
</div>

### DevOps
<div>
<img src="https://img.shields.io/badge/Github Actions-181717?style=flat-square&logo=Github&logoColor=white"/>
</div>

## 아키텍처
![aws 아키텍처](https://user-images.githubusercontent.com/67459853/209478134-37f5b49f-9dc0-456a-8e37-593e7a62c34e.png)

## ⚙️ 기능
### 로그인
- OAuth로 카카오, Google 계정으로 로그인 가능
- 회원가입시 닉네임, 이메일을 입력하여야 하며, Google 계정의 경우 해당 Google 계정 이메일이 기본값으로 입력됨

| ![로그인](https://user-images.githubusercontent.com/67459853/209465753-c08db15d-158d-407e-8ca9-53649ad20f76.PNG) | ![회원가입](https://user-images.githubusercontent.com/67459853/209465754-3298cb62-ea0e-490e-9fdd-4eb9464380a7.PNG) |
| ------------- | ------------- |

### 알림
- 예측 적중시 알림 생성
- 알림 클릭시 알림 삭제 및 해당 예측 상세 페이지로 이동

![image](https://user-images.githubusercontent.com/67459853/209465876-47d473ee-1c36-4a30-a19a-29731babf12a.png)

### 예측
- 예측 조회 (아직 참여하지 않은 예측 필터 가능)

![image](https://user-images.githubusercontent.com/67459853/209466494-5a8b5673-cf3c-4924-97df-3834007e35d1.png)

- 예측 참여 (예측에 참가하려면 코인이 필요함. 예측 참여 후 코인 차감)
- 예측 마감, 예측 참여 여부에 따라 UI 변경

![image](https://user-images.githubusercontent.com/67459853/209466037-50fc5a41-21d8-4e68-9549-e9aad456de1c.png)
![image](https://user-images.githubusercontent.com/67459853/209466021-5a31b2ef-ab94-4766-a81d-a0601d752465.png)

- 예측 마감 후 상세 페이지에서 유저 예측 통계 조회 가능

![image](https://user-images.githubusercontent.com/67459853/209466089-58b18e46-3cc0-4ac3-af8a-9ba78eebcd3f.png)

### 마이페이지
- 예측 이력 및 결과 조회

![image](https://user-images.githubusercontent.com/67459853/209466435-d3164f22-19c7-4c4a-83ad-906ae18d2e15.png)
![image](https://user-images.githubusercontent.com/67459853/209466446-777dc08a-2217-4511-928c-39c6e5743667.png)

