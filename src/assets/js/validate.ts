export function vdZcPassWord(required = true) {
  return [
    {
      required: required,
      message: '登录密码不能为空！',
      trigger: 'blur',
    },
    {
      pattern: /((^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,20}$)|(^(?=.*\d)(?=.*[A-Z])(?=.*\W)[\da-zA-Z\W]{8,20}$)|(^(?=.*\d)(?=.*[a-z])(?=.*\W)[\da-zA-Z\W]{8,20}$)|(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\da-zA-Z\W]{8,20}$))/,
      message: '8-20位字符,至少包含大写字母、小写字母、数字、特殊字符中的三种',
      trigger: 'blur',
    },
  ];
}
