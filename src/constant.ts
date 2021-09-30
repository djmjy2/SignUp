import { ValidationRule } from "./types";

export const RequireRule: ValidationRule = {
  rule: /.+/,
  match: true,
  message: '필수항목입니다.',
};

export const CantContainWhitespace: ValidationRule = {
  rule: /\s/,
  match: false,
  message: '공백을 포함할 수 없습니다.',
};

export const CantStartNumber: ValidationRule = {
  rule: /^\d/,
  match: false,
  message: '아이디는 숫자로 시작할 수 없습니다.',
}

export const MinimumLengthLimit = (limit: number): ValidationRule => ({
  rule: new RegExp(`(.){${limit}}`),
  match: true,
  message: `최소 ${limit}글자 이상 이어야 합니다.`,
});
