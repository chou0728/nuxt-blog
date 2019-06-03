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
      addPost (state, createdpost) {
        state.loadedPosts.push(createdpost)
      },
      editPost (state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        // 使用此方法後reload頁面可以看到在server端運行的結果
        // if(!process.client) console.log(context)
        return axios
          .get (`${process.env.baseUrl}/posts.json`)
          .then (result => {
            // 將firebase中的object轉成array
            const postsArray = [];
            for (const key in result.data) {
              postsArray.push ({...result.data[key], id: key});
            }
            // 抓取完成後馬上寫進store中 (發起actions或是mutations都可)
            vuexContext.commit('setPosts', postsArray)
          })
          .catch (error => context.error (error));
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit ('setPosts', posts);
      },
      addPost (vuexContext, createdpost) {
        return axios.post(`${process.env.baseUrl}/posts.json`, createdpost)
          .then(result => {
            vuexContext.commit('addPost', {...createdpost, id: result.data.name })
          })
          .catch(error => console.log(error))
      },
      editPost (vuexContext, editedPost) {
        return axios.put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
        .then(result => {
          vuexContext.commit('editPost', editedPost)
        })
        .catch(error => console.log(error))
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
