(self.webpackChunkStorybooks=self.webpackChunkStorybooks||[]).push([[484,155],{"./stories/Button.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Basic=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Button=__webpack_require__("./stories/Button.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");exports.default={title:"components/MyButton",component:_Button.MyButton};(exports.Basic=function Basic(args){return(0,_jsxRuntime.jsx)(_Button.MyButton,Object.assign({},args))}).args={text:"Hello World",color:"purple"},module.exports.__namedExportsOrder=["Basic"]},"./stories/Button.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.MyButton=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styles=_StyleSheet.default.create({button:{paddingVertical:8,paddingHorizontal:16,borderRadius:8,alignSelf:"flex-start",flexGrow:0,backgroundColor:"purple",height:40,justifyContent:"center",alignItems:"center",minWidth:200},buttonText:{color:"white",fontSize:16,fontWeight:"bold"},buttonContainer:{alignItems:"flex-start",flex:1}});(exports.MyButton=function MyButton(_ref){var text=_ref.text,onPress=_ref.onPress,color=_ref.color,textColor=_ref.textColor;return(0,_jsxRuntime.jsx)(_View.default,{style:styles.buttonContainer,children:(0,_jsxRuntime.jsx)(_TouchableOpacity.default,{style:[styles.button,!!color&&{backgroundColor:color}],onPress,activeOpacity:.8,children:(0,_jsxRuntime.jsx)(_Text.default,{style:[styles.buttonText,!!textColor&&{color:textColor}],children:text})})})}).__docgenInfo={description:"",methods:[],displayName:"MyButton",props:{onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},textColor:{required:!1,tsType:{name:"string"},description:""}}}}}]);