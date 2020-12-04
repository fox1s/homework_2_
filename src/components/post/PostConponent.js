import React, {Component} from 'react';

class PostConponent extends Component {
    render() {
        let {item, onSelectItem} = this.props;
        return (
            <div>
                <h4 className={'font'}>{item.id}. {item.title}</h4>

                <button onClick={()=>onSelectItem(item.id)}> chose </button>
                <br/>{item.body}
            </div>


        );
    }
}

export default PostConponent;