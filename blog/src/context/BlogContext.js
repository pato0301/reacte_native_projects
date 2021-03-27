// import React, {useState, useReducer} from 'react'
import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

// const BlogContext = React.createContext()

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'get_blogpost':
            return action.payload;
        case 'add_blogpost':
            return [...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                }
            ]
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                ? action.payload 
                : blogPost
                // if(blogPost.id === action.payload.id){
                //     return action.payload
                // }
                // else{
                //     return blogPost
                // }
            })
        default:
            return state;
    }
}

getBlogPost = dispatch => {
    return async(title, content, callback) => {
        const response = await jsonServer.get('/blogposts')
        dispatch({ type: 'get_blogpost', payload: response.data });
    }
    // setBlogPost([...blogPost,{title: `Blog Post #${blogPost.length + 1}`}])
};

addBlogPost = dispatch => {
    return async(title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content })
        // dispatch({ type: 'add_blogpost', payload:{title, content}});
        if(callback){
            callback();
        }
    }
    // setBlogPost([...blogPost,{title: `Blog Post #${blogPost.length + 1}`}])
};

deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_blogpost', payload: id})
    }
};

editBlogPost = dispatch => {
    return async (id, title, content, callback)  => {
        await jsonServer.put(`/blogposts/${id}`,{title, content})
        dispatch({ 
            type: 'edit_blogpost', 
            payload: {id, title, content}
        })
        if(callback){
            callback();
        }
    }
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPost},
    []
    // [{id:1000000,title:"prueba",content:"esto es una prueba"}]
)


// Not needed anymore as we extracted to createDataContext
// export const BlogProvider = ( {children} ) => {
//     const [blogPost, dispatch] = useReducer(blogReducer, [])
//     // const blogPost = [
//     //     {title : 'Blog Post #1'},
//     //     {title : 'Blog Post #2'}
//     // ]

//     addBlogPost = () => {
//         dispatch({ type: 'add_blogpost'})
//         // setBlogPost([...blogPost,{title: `Blog Post #${blogPost.length + 1}`}])
//     };

//     return <BlogContext.Provider
//     //addBlogPost:addBlogPost == addBlogPost
//         value={{data:blogPost, addBlogPost}}
//     >
//         {children}
//     </BlogContext.Provider>
// }

// export default BlogContext;