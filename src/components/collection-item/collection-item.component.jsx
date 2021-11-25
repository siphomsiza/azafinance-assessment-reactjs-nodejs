import React from 'react';

import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';


import './collection-item.styles.scss';

const CollectionItem = (props) => {
    let history = useHistory();
    const redirect = () => {
        history.push('/artist', props)
    }

    //console.log("props", props)

    const { name, type, picture_big, nb_fan ,release_date,album} = props;
    //console.log(props)
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${picture_big})` }}
            />
            <div className="collection-footer row">
                <span className="name">{name}</span>
                <span className="fans">Fans: {nb_fan}</span>
                {
                    type === 'album' ? <span className="fans">Released: {release_date}</span> : ''
                }

            </div>
            <CustomButton onClick={redirect} inverted> View Artist </CustomButton>
        </div>
    )
}





const mapDispatchToProps = dispatch => ({
    //addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
