import "../styles/globals.css";
import Layout from "../components/layout/Layout";

import wrapper from "../store/configureStore";
import PropTypes from "prop-types";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);

// Next.js 에서 Redux 상태 관리 라이브러리 사용하기

// 라이브러리
// npm install redux
// npm install redux-thunk : middleware 필요 시
// npm install -D redux-devtools-extension : 개발 중에만 사용하는 redux-devtools
// npm install next-redux-wrapper : next.js에서 redux를 사용하기 위해 꼭 필요한 라이브러리

// 먼저 store 폴더에 actions, contants, reducers 폴더를 만든다
// contants 폴더에는 action-types 파일을 만들고 action의 type들의 정의한다
// 그 다음 reducers 폴더에 index.js와 productReducer.js를 만든다
// productReducer.js 파일에 initialState를 정의하고 reducer를 action의 type에 따라 switch 문으로 작성한다
// actions 폴더에서 action의 type에 따라 발생할 action들을 정의한다
// 이때 redux-thunk를 사용하여 dispatch 해준다
// reducers 폴더의 index.js 파일에서 combineReducers를 통해 여러 reducer들을 결합해주고 결합한 reducers를 export 해준다

// store 폴더에 configureStore.js라는 파일을 만들고
// import {createStore, applyMiddleware, compose} from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// import {createWrapper} from 'next-redux-wrapper'
// import reducers from '../reducers' -> reducers 폴더의 index.js에서 가져온 결합된 reducers
// 위와 같이 import 해준다

// const isProduction = process.env.NODE_ENV === "production"
// 위의 코드를 입력해주는데 redux devtools 같은 경우에는 Production에서는 보안상 공개하지 않는 것이 좋기 때문에
// 개발 모드에서만 나타나도록 설정해준다

/*
 const makeStore = () => {
  const enhancer = isProduction 
    ? compose(applyMiddleware(thunk))
    : composeWithDevTools(applyMiddleware(thunk));

    const store = createStore(reducers, enhancer);
    return store;
}
*/
// 미들웨어 적용에 대한 enhancer를 작성해주고 createStore를 통해 store를 생성한 뒤 store를 return 해준다

// const wrapper = createWrapper(makeStore, {debug : !isProduction});
// store를 next-redux-wrapper에서 가져온 createWrapper로 감싸주고 Production 모드가 아닌 경우에는 debug 해주도록 한다
// 그리고 wrapper를 export 해준다

// _app.js
//import wrapper from "../store/configureStore";
//import PropTypes from "prop-types";

/*
const App = ({Component}) => {
  return <Component />
}

App.propTypes = {
  Component : PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App)
*/
