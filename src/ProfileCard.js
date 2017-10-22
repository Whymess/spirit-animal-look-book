import React, { Component } from 'react';
import FileInput from 'react-file-input';
import { storage, database } from './firebase';
import './ProfileCard.css';

class ProfileCard extends Component {
  constructor(props) {
    super(props);
    // Lets get it in the right folder.... 
    this.storageRef = storage.ref('/user-images').child(props.uid);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userRef = database.ref('/users').child(props.uid)
  }

  handleSubmit(e){
    const file = e.target.files[0];
    const uploadTask = this.storageRef
                      .child(file.name)
                      .put(file, {contentType: file.type});
    uploadTask.then((snapshot) => {
      this.userRef.child('/photoURL').set(snapshot.downloadURL);
    });

  }

  render() {
    const {photoURL, displayName} = this.props.user;
    return (
      <article className="ProfileCard">
        <img 
          className="ProfileCard-photo"
          src={photoURL}/>
          <h3> {displayName} </h3>
          
          <FileInput
            accept=".png,.gif,jpg"
            placeholder="Select an image"
            onChange={this.handleSubmit}/>
      </article>

    );
  }
}



export default ProfileCard;
