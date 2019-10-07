import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from 'util/history'

import {
getUserList
} from "Redux/actions";

class ConnectedLaunchGame extends Component {
  componentDidMount() {
    !this.props.user.userList && this.props.getUserList()
  }
  render() {
    const {
      user: { userList }
    } = this.props;

    return (
      <div id="page-content" className="animated fadeIn">
        <div className="container-fluid">

          <div id="home-title" className="row -rowmargin">
            <div className="col-md-12 text-center">
              <h1>Users</h1>
              <p className="nomargin">All users {userList.length}</p>
            </div>
          </div>


          <div id="home-photo" className="row -rowmargin">
            {userList.map((user, index) =>

              <div key={index} className="col-md-4">
                <div className="photo-item -marginbottom">
                  <div className="overlay-caption">
                    <div className="align-middle">
                      <div className="v-align -oncenter">
                        <div className="phototitle">{user.name}</div>
                        <hr className="mx-3"></hr>
                        <a href={`mailto:${user.email}`} className="email">{user.email}</a>
                        <div> 
                          <a href={`https://www.google.com/maps/?q=${user.address.geo.lat},${user.address.geo.lng}`} className="city" target="blank">{user.address.city}</a>
                        </div>
                        <div className="phone">{user.phone}</div>
                        <a href={`http://${user.website}`} target="blank" className="website">{user.website}</a>
                        <div className="company">{user.company.name}</div>
                        <button class="default-button" onClick={()=> history.push(`user/${index}`)}>Edit User</button>
                      </div>
                    </div>
                  </div>
                  <img src={`images/${user.image}`} alt="" className="fullwidth" />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => {
  return {user};
}

export default connect(
  mapStateToProps,
  {
    getUserList
  })(ConnectedLaunchGame);
