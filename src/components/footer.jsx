import "rc-footer/assets/index.css";
import React from "react";
import Footer from "rc-footer";

export default function App() {
  return (
    <div style={{margintop:"40px",position:"relative"}}>
      <Footer
      style={{fontFamily:"'Allerta',serif",marginTop:"100px"}}
        maxColumnsPerRow={4}
        columns={[
          {
            title: "The Lovure",
            items: [
              {
                title: "Ant Design Pro",
                url: "https://pro.ant.design/",
                openExternal: true,
              },
              {
                title: "Ant Design Mobile",
                url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                title: "Kitchen",
                url: "https://kitchen.alipay.com/",
                description: "Sketch 工具集",
              },
            ],
          },
          {
            title: "Figma",
            items: [
              {
                title: "Ant Design Pro",
                url: "https://pro.ant.design/",
                openExternal: true,
              },
              {
                title: "Ant Design Mobile",
                url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                title: "Kitchen",
                url: "https://kitchen.alipay.com/",
                description: "Sketch 工具集",
              },
            ],
          },
          {
            title: "Material UI",
            items: [
              {
                title: "Ant Design Pro",
                url: "https://pro.ant.design/",
                openExternal: true,
              },
              {
                title: "Ant Design Mobile",
                url: "https://mobile.ant.design/",
                openExternal: true,
              },
              {
                title: "Kitchen",
                url: "https://kitchen.alipay.com/",
                description: "Sketch 工具集",
              },
            ],
          },
          {
            icon: (
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                alt="more products"
              />
            ),
            title: "REACT",
            items: [
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                    alt="yuque"
                  />
                ),
                title: "语雀",
                url: "https://yuque.com",
                description: "知识创作与分享工具",
                openExternal: true,
              },
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                    alt="yuque"
                  />
                ),
                title: "云凤蝶",
                url: "https://yunfengdie.com",
                description: "中台建站平台",
                openExternal: true,
              },
            ],
          }
        ]}
        bottom="Made with ❤️ by Shikhar Gupta"
      />
    </div>
  );
}
