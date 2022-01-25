const path = require("path");

const IS_DEV = process.env.NODE_ENV === "development";
const rootPath = IS_DEV
  ? path.join(process.cwd(), "/src/image")
  : "/train/jojo/image/";
const getImagePath = (name) => {
  return IS_DEV ? path.join("../../image", name) : "/train/jojo/image/" + name;
};

module.exports = {
  locals: {
    rootPath,
    getImagePath,
    characterList: [
      {
        name: "空条徐伦",
        cv: "CV.菲鲁兹·蓝",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0101.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0101.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0101.png 2x'
      },
      {
        name: "艾梅斯·克斯提洛",
        cv: "CV.田村睦心",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0201.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0201.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0201.png 2x'
      },
      {
        name: "斗魂骇客",
        cv: "CV.伊濑茉莉也",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0301.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0301.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0301.png 2x'
      },
      {
        name: "安波里欧·亚曼纽",
        cv: "CV.种崎敦美",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0401.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0401.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0401.png 2x'
      },
      {
        name: "天气预报",
        cv: "CV.梅原裕一郎",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0501.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0501.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0501.png 2x'
      },
      {
        name: "纳鲁西索·安娜苏",
        cv: "CV.浪川大辅",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0601.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0601.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0601.png 2x'
      },
      {
        name: "空条承太郎",
        cv: "CV.小野大辅",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0701.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0701.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0701.png 2x'
      },
      {
        name: "恩里克·普奇",
        cv: "CV.关智一",
        img: "https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0801.png",
        srcset: 'https://suzhui.github.io/train/enterprise/assets/1x/img_chara_0801.png 1x, https://suzhui.github.io/train/enterprise/assets/2x/img_chara_0801.png 2x'
      },
    ],
  },
};
