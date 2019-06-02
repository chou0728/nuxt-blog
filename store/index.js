import Vuex from 'vuex';

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
        return new Promise ((resolve, reject) => {
          setTimeout (() => {
            vuexContext.commit ('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post!',
                thumbnail: 'https://cdn-images-1.medium.com/max/1200/1*EWDEUt0fqsmRgpYGFOOMew.png',
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post!',
                thumbnail: 'https://miro.medium.com/max/1838/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg',
              },
              {
                id: '3',
                title: 'Third Post',
                previewText: 'This is our third post!',
                thumbnail: 'https://firebase.google.com/images/social.png',
              },
            ]);
            resolve ();
          }, 1000);
        });
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
