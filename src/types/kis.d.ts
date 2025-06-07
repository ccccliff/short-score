//NOTE - api 같은 Json 타입은 확장성,유연성을 위해 객체만 설정이 가능한 interface를 사용한다.
export interface KisAccessTokenResponse {
  access_token: string; // OAuth 2.0의 Client Credentials Grant를 운용
  token_type: "Bearer";
  expires_in: number; // ex) 7776000
  access_token_token_expired: string; // ex) "2022-08-30 08:10:10"
}
