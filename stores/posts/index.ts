import posts from "./mock/posts.json"
import {Post} from "@/types/posts";

// Local type
type stateData = {
  posts: Post[],
  currentPostById: Post | null,
  notFoundPost: boolean,
  postFoundIndex: number | null
}

export const usePostsStore = defineStore('posts', {
  state: (): stateData => {
    return {
      posts: posts,
      currentPostById: null,
      postFoundIndex: null,
      notFoundPost: false,
    };
  },
  getters: {
    /*
    * @returns {array} - send posts
    * */
    getPosts: (state: stateData) => state.posts,

    /*
    * @returns {object} - send post
    * */
    getCurrentPost: (state: stateData) => state.currentPostById,

    /*
    * @returns {number|null} - send full likes from post
    * */
    getCurrentPostLikesCount: (state: stateData) => state.currentPostById?.likes_count || null,

    /*
    * @returns {boolean} - send i liked it
    * */
    getCurrentPostIsLike: (state: stateData) => state.currentPostById?.me_liked || false,

    /*
    * @returns {boolean} - send error for current post
    * */
    isPostLoadError: (state: stateData) => state.notFoundPost,
  },
  actions: {
    /*
    * Clear current post from {.../post/ID}
    * @returns {void}
    * */
    clearCurrentPost() {
      this.notFoundPost = false
      this.currentPostById = null
      this.postFoundIndex = null
    },

    /*
    * Change like state for {Post} for current user
    * @returns {void}
    * */
    togglePostLike() {
      if (!this.currentPostById) {
        throw new Error("[currentPostById] - cannot be empty")
      }
      this.currentPostById.me_liked ? this.currentPostById.likes_count--  : this.currentPostById.likes_count++
      this.currentPostById.me_liked = !this.currentPostById.me_liked
    },

    /*
    * brute force {posts} to get specific {post} by ID,
    * saves the index in order to quickly and without enumeration change the state of the current {post}
    * @param {string} postId - this is id in {posts}
    * @returns {void}
    * */
    getPostById(postId: number) {
      const postIndex = this.posts.findIndex(post => post.id === postId)
      if (postIndex !== -1) {
        this.currentPostById = this.posts[postIndex]
        this.postFoundIndex = postIndex
      } else {
        this.notFoundPost = true
      }
    },
  }
})
