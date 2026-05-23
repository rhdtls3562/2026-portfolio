/** 네이버 메일 작성 페이지 URL을 공통으로 생성하는 상수 파일. */

const NAVER_MAIL_COMPOSE_URL = "https://mail2.naver.com/write_popup3.nhn";

type NaverMailOptions = {
  body?: string;
  subject?: string;
  to: string;
};

export function getNaverMailComposeHref({
  body,
  subject,
  to,
}: NaverMailOptions) {
  const params = new URLSearchParams({
    cmd: "compose",
    to,
  });

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `${NAVER_MAIL_COMPOSE_URL}?${params.toString()}`;
}
