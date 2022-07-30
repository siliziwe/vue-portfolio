import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        name: 'ToDoLIst',
        title: 'This is my to do app',
        img: 'https://i.postimg.cc/MTnV8yVt/Screenshot-2022-07-21-131859.png',
        live: 'https://inspiring-druid-09c6ef.netlify.app',
        Ghub: 'https://github.com/siliziwe/js-toDoList'
      },
      {
        name: 'Animated Rainbow',
        title: 'This is my rainbow project',
        img: 'https://i.postimg.cc/3RG6xDHC/rainbow-removebg-preview.png',
        live: 'https://zingy-baklava-1aba75.netlify.app',
        Ghub: 'https://github.com/siliziwe/Rainbow'
      },
      {
        name: 'Calculator',
        title: 'This is a Calculator',
        img: 'https://i.postimg.cc/28nZ7jCc/calculator-removebg-preview.png',
        live: 'https://github.com/siliziwe/JSCalculator',
        Ghub: 'https://github.com/siliziwe/JSCalculator'
      },
      {
        name: 'Property Listing',
        title: 'This is a Property List project',
        img: 'https://i.postimg.cc/xjpw3H05/Screenshot-2022-07-21-133203.png',
        live: 'https://sensational-sunflower-30ed35.netlify.app',
        Ghub: 'https://github.com/siliziwe/myPropertyProject',
      },
      {
        name: 'BMI Calculator',
        title: 'This is a BMI Calculator',
        img: 'https://i.postimg.cc/pdmj2qv4/Screenshot-2022-07-21-161528.png',
        live: 'https://admirable-semolina-caabb7.netlify.app',
        Ghub: 'https://github.com/siliziwe/BMI-Calculator'
      },
      {
        name: 'Temperature Convertor',
        title: 'This is a Temperature Convertor',
        img: 'https://i.postimg.cc/50wSVnq1/Screenshot-2022-07-21-161922.png',
        live: 'https://regal-seahorse-bc0f5f.netlify.app',
        Ghub: 'https://github.com/siliziwe/Temperature-calculator-js'
      },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
