import React, {Component} from 'react';
import PostConponent from "../post/PostConponent";
import './AllPostComponent.css'

class AllPostsComponent extends Component {
    state = {posts: [], chosen: null}

    onSelectItem = (id) => {
        let {posts} = this.state;
        let findPost = posts.find(post => post.id === id);
        this.setState({chosen: findPost})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => this.setState({posts}))
    }

    render() {
        let {posts, chosen} = this.state
        return (
            <div>
                {
                    posts.map((post, index) => {
                        if (index<5) {
                            return <PostConponent item={post} onSelectItem={this.onSelectItem} key={post.id}/>
                        }
                    })
                }
                {
                    chosen && <b><PostConponent item = {chosen}/></b>
                }

            </div>
        );
    }
}

export default AllPostsComponent;