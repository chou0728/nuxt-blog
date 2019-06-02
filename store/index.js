import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store ({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        // 使用此方法後reload頁面可以看到在server端運行的結果
        // if(!process.client) console.log(context)
        return axios
          .get ('https://nuxt-blog-0728.firebaseio.com/posts.json')
          .then (res => {
            // 將firebase中的object轉成array
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push ({...res.data[key], id: key});
            }
            // 抓取完成後馬上寫進store中 (發起actions或是mutations都可)
            vuexContext.dispatch('setPosts', postsArray)
          })
          .catch (error => context.error (error));
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit ('setPosts', posts);
      },
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
