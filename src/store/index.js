import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        name: 'ToDoLIst',
        title: 'This is my to do app',
        img: 'https://i.postimg.cc/MTnV8yVt/Screenshot-2022-07-21-131859.png',
      },
      {
        name: 'Rainbow',
        title: 'This is my rainbow project',
        img: 'https://i.postimg.cc/3RG6xDHC/rainbow-removebg-preview.png',
      },
      {
        name: 'Calculator',
        title: 'This is a Calculator',
        img: 'https://i.postimg.cc/28nZ7jCc/calculator-removebg-preview.png',
      },
      {
        name: 'Property Listing',
        title: 'This is a Property List project',
        img: 'https://i.postimg.cc/xjpw3H05/Screenshot-2022-07-21-133203.png',
      },
      {
        name: 'BMI Calculator',
        title: 'This is a BMI Calculator',
        img: 'https://i.postimg.cc/pdmj2qv4/Screenshot-2022-07-21-161528.png',
      },
      {
        name: 'Temperature Convertor',
        title: 'This is a Temperature Convertor',
        img: 'https://i.postimg.cc/50wSVnq1/Screenshot-2022-07-21-161922.png',
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
