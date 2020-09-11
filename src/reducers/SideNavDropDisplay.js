const initialState = [
  {
    title: "首页",
    imgShow: "",
    imgNone: "",
    content: [],
    showDrop: false,
  },
  {
    title: "解决方案",
    imgShow: "images/icon/展开-white.svg",
    imgNone: "images/icon/收起-white.svg",
    content: [
      "灵活用工",
      "高端人才寻访",
      "招聘流程外包",
      "海外校招",
      "出海解决方案",
      "管理咨询",
    ],
    showDrop: false,
  },
  {
    title: "热门职位",
    imgShow: "",
    imgNone: "",
    content: [],
    showDrop: false,
  },
  {
    title: "行业洞察",
    imgShow: "images/icon/展开-white.svg",
    imgNone: "images/icon/收起-white.svg",
    content: ["调研报告", "白皮书", "IntelliPro观点", "SVLC美国硅谷领导力社区"],
    showDrop: false,
  },
  {
    title: "留学生在线教育平台",
    imgShow: "",
    imgNone: "",
    content: [],
    showDrop: false,
  },
  {
    title: "新闻动态",
    imgShow: "images/icon/展开-white.svg",
    imgNone: "images/icon/收起-white.svg",
    content: ["活动中心", "行业资讯"],
    showDrop: false,
  },
  {
    title: "关于我们",
    imgShow: "images/icon/展开-white.svg",
    imgNone: "images/icon/收起-white.svg",
    content: ["公司简介", "加入我们", "联系我们"],
    showDrop: false,
  },
];
let temp;

const navDropDisplay = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_SIDE":
      temp = [...state];
      temp.forEach((item) => {
        item.showDrop = false;
      });
      temp[action.payload].showDrop = true;
      return temp;
    case "HIDE_SIDE":
      temp = [...state];
      temp[action.payload].showDrop = false;
      return temp;
    default:
      return state;
  }
};

export default navDropDisplay;
