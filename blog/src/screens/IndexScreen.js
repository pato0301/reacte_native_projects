import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPost} = useContext(BlogContext)

    useEffect(() => {
        getBlogPost();

        const listener = navigation.addListener('didFocus', () => {
            getBlogPost();
        });

        return () => {
            listener.remove()
        }
    }, [])

    return <View>
        {/* <Button
            title="Add Post"
            // because addBlogPost is a function we can just
            // call that function like below
            onPress={addBlogPost}
        /> */}
        <FlatList
            data={state}
            keyExtractor={(blogPosts) => blogPosts.title}
            renderItem={({ item }) =>{
                return <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
                    <View style={style.row}>
                        <Text style={style.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name='trash' style={style.icon}/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            }}
        />
    </View>
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name='plus' size={30}/>
        </TouchableOpacity>)
    }
}

const style = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
        borderTopWidth:1,
        // borderBottomColor:1,
        borderColor: 'gray',
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize: 24
    }
});

export default IndexScreen;