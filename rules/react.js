module.exports = {
  rules: {
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }], // 순수한 함수로 작성되도록 상태 비 저장 React 구성요소 적용
    'react/prefer-read-only-props': 'error', // props는 읽기전용
    'react/react-in-jsx-scope': 'error', // jsx 사용 시 React 누락 방지
    'react/require-render-return': 'error', // render 함수 내의 return 누락 방지
    'react/self-closing-comp': 'warn', // 하위요소가 없는 JSX에 대한 추가닫기 태그방지
    'react/style-prop-object': 'error', // style 값을 object 형식으로 적용
    'react/no-unknown-property': 'error', // 정의되지 않은 속성 사용 금지
    'react/no-typos': 'error', // 일반적인 오타 방지
    'react/no-deprecated': 'error', // 더 이상사용되지 않는 메서드 사용방지
    'react/no-danger': 'error', // dangerous JSX 사용 금지
    'react/no-array-index-key': 'warn', // 키에서 배열인덱스 사용 방지
    'react/no-access-state-in-setstate': 'error', // this.setState 내에서 this.state 사용 방지
    'react/jsx-uses-vars': 'error', // 사용된변수가 미사용으로 잘 못 표시되지 않도록 방지
    'react/jsx-no-undef': 'error', // jsx에 선언되지 않은 변수 허용 안함
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }], // 중복 속성 사용 금지
    'react/jsx-indent-props': 'off', // jsx 속성 indent
  },
}
