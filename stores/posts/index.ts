import {Post} from "@/types/posts";
import posts from "./mock/posts.json"

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
    getPosts: (state: stateData) => state.posts,
    getCurrentPost: (state: stateData) => state.currentPostById,
    getCurrentPostLikesCount: (state: stateData) => state.currentPostById?.likes_count || null,
    getCurrentPostIsLike: (state: stateData) => state.currentPostById?.me_liked || false,
    isPostLoadError: (state: stateData) => state.notFoundPost,
  },
  actions: {
    clearCurrentPost() {
      this.notFoundPost = false
      this.currentPostById = null
      this.postFoundIndex = null
    },
    togglePostLike() {
      if (!this.currentPostById) {
        throw new Error("[currentPostById] - cannot be empty")
      }
      this.currentPostById.me_liked ? this.currentPostById.likes_count--  : this.currentPostById.likes_count++
      this.currentPostById.me_liked = !this.currentPostById.me_liked
    },
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
