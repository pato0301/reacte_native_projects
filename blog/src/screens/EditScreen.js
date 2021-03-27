import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
// import { EvilIcons } from '@expo/vector-icons'

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === id)

    return <BlogPostForm
        initialValues={{title:blogPost.title,content:blogPost.content}}
        onSubmit={(title, content) => {
            // navigation.pop send you to the previous screen
            editBlogPost(id, title, content, () => navigation.pop())
        }}
    />
}


const style = StyleSheet.create({})

export default EditScreen;