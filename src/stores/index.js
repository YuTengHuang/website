import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', () => {
  const info = ref([
      {id:"Home", displayText: "Home", subtitle:"首頁", img: "github", src: "https://github.com/YuTengHuang",
        content:{
          hi : "Hello, I'm",
          name: "YuTengHuang"
        }
      }, 
      {id:"Skills", displayText: "Skills", subtitle:"技能", 
        content: [
          "HTML",
          "CSS",
          "JavaScript",
          "BootStrap",
          "Vue",
          "Java",
          "MySQL",
          "Python"
        ]
      },
      {id:"Projects", displayText: "Projects", subtitle:"專案", 
        content: [
          { 
            img: "iotshop", title: "iotShop商城", imgtitle: "iotShop商城", time: "2024-05-13",
            contenttext:{
              1: "前端技術:使用Vue.js提供快速和動態的用戶界面方面",
              2: "後端技術:採用Django框架提供安全且強大的後端處理能力",
              3: "伺服器端:使用Nginx、uWSGI提供高性能和低資源消耗的服務",
              4: "部署環境: 部署於AWS EC2上，運行Linux Ubuntu操作系統版本。"
            },
            src: "http://54.250.153.54/"
          },
        ]
      },
      {id:"Works", displayText: "Works", subtitle:"作品",
        content:[
          {
            img: "mp4", title: "YouTube影片下載", imgtitle: "YouTube Download", time: "2023-9-12",
            contenttext:{
              1: "利用Python的Pytube套件製作了一個YouTube影片下載網站",
              2: "提供mp3和mp4格式的下載選項",
              3: "不需擔心廣告干擾，輕鬆完成下載"
            },
          },
        
          {
            img: "game", title: "小遊戲", imgtitle: "Space Fight", time: "2023-08-18",
            contenttext:{
              1: "使用Pygame製作了這款彈幕射擊遊戲",
              2: "這是在自學期間跟著教學首次嘗試製作的作品",
            },
            src: "https://utenh.itch.io/space-fight"
          },
      ]
      }, 
      {id:"About", displayText: "About", subtitle:"關於",img: "about",
        content: 
        "經過8個月的職訓局培訓，我從零開始學習了多項技術，\
        包括C、Java、Python、Android、Html、Css以及一些JavaScript。\
        我也涉獵了Raspberry Pi、Arduino、HT66F2390、MCS-51、STM32等技術，\
        雖然我主要專注於軟體開發。在這期間，我經常與他人討論和解決問題，\
        這些交流讓我不斷成長。"
        
      }, 
  ])

  return { info }
})

export const useOverlayStore = defineStore('overlay', () => {
  const state = {
    isShow: ref(true)
  };

  const func = {
    showOverlay() {
      state.isShow.value = true;
    },
    hideOverlay() {
      state.isShow.value = false;
    }
  };
  
  return { state, func };
});

export const useScrollEffect = defineStore('scrollEffect', ()=>{
  const func = {
    goTop(){
      window.scrollTo(top)
    },

    scrollToSection(id){
      const item = document.getElementById(id.toLowerCase())
      if (item){
        item.scrollIntoView()
        if (window.innerWidth <= 899.8){
          document.querySelector("#menu-toggle").classList.toggle("toggled")
        }
      }
    }
  }
  return { func }
})