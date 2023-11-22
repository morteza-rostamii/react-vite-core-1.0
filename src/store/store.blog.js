import {create} from 'zustand'
import {firestore} from '@/firebase/firedb'
import {getDocs, collection, deleteDoc, doc, addDoc, updateDoc} from 'firebase/firestore'
import { getDocFromResponse } from '@/utils/utils.fixdata';

// reference to blogs_collection
const blogsCollectionRef = collection(firestore, 'blogs');

const useBlogStore = create((set, get) => ({
  blogs: [],
  
  // Get: /blogs
  async fetchBlogs() {
    
    try {
      const data = await getDocs(blogsCollectionRef);          

      const docs = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      return set(state => ({...state, blogs: docs}));
    } catch(error) {
      console.log(error);
    }
  },
  
  // Post: /blogs
  async createBlog({title, body}) {
    addDoc(blogsCollectionRef, {title, body})
      .then(async (ref) => {
        
        console.log('success createing blog!! ', ref.id);

        // update state
        const newDoc = await getDocFromResponse(firestore, 'blogs', ref.id);
        console.log(newDoc);
        set(state => ({...state, blogs: [...state.blogs, newDoc]}));
      })
      .catch((error) => {
        console.log(error.message);
      })
  },

  // Put: /blogs/:id
  editBlog: (id, {title, body}) => {
    const blogDoc = doc(firestore, 'blogs', id);

    updateDoc(blogDoc, {
      title: title,
      body: body,
    })
      .then(async () => {
        const updatedBlogDoc = await getDocFromResponse(firestore, 'blogs', id);
        set(state => ({...state, blogs: state.blogs.map(b => {
          if (b.id === id) return updatedBlogDoc;
          else return b;
        })}));
      })
      .catch((error) => {
        console.log(error.message);
      })
    
  },

  async deleteBlog(id) {

    try {
      const blogDoc = doc(firestore, 'blogs', id);
      await deleteDoc(blogDoc);

      // update state, after delete
      //const UpdatedBlogDoc = doc(firestore, 'blogs', id);
      const newBlogs = get().blogs.filter((blog) => blog.id !== id);
      set(state => ({...state, blogs: newBlogs}));
    } catch(error) {
      console.log(error.message);
    }
  },
}));

// subscribe
useBlogStore.subscribe((state) => console.log(state));

export default useBlogStore