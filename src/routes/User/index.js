import React, { Component } from "react";
import { connect } from "react-redux";
import { history } from 'util/history'

import {
  updateUser,
  getUserList
} from "Redux/actions";

class User extends Component {
  componentDidMount() {
    this.props.user.userList.length === 0 && this.props.getUserList()
  }

  render() {
    const {
      match: { params: { userId } },
      user: { userList },
      updateUser
    } = this.props;

    const user = userList[userId];

    if (!user) {
      return (<center> There is no user With this id </center>)
    }

    const {
      name,
      email,
      address: { city } = {},
      phone,
      website,
      company: { name: companyName } = {},
    } = userList[userId];

    const handleField = (newVal) => updateUser({ userId, newVal });

    return (
      <div id="page-content" className="animated fadeIn">
        <div className="container-fluid">
          <div id="message-title" className="row">
            <div className="col-md-12 text-left">
              <h2 className="contact">
                 Edit User
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <img src={`images/${user.image}`} alt="" className="fullwidth" />
            </div>
            <div className="col-md-8">
              <div id="message-form" className="row -rowmargin">
                <div className="col-md-6">
                  <input name="name" type="text" value={name} placeholder="Full Name" onChange={(e) => handleField({ name: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <input name="email" type="text" value={email} placeholder="Email" onChange={(e) => handleField({ email: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <input name="city" type="text" value={city} placeholder="City" onChange={(e) => handleField({ address: { city: e.target.value } })} />
                </div>
                <div className="col-md-6">
                  <input name="phone" type="text" value={phone} placeholder="Phone" onChange={(e) => handleField({ phone: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <input name="website" type="text" value={website} placeholder="Website" onChange={(e) => handleField({ website: e.target.value })} />
                </div>
                <div className="col-md-6">
                  <input name="company" type="text" value={companyName} placeholder="Company Name" onChange={(e) => handleField({ company: { name: e.target.value } })} />
                </div>
                <div className="col-md-12">
                   <button className="default-button" onClick={()=> history.push('/')}>All Users</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }

}

const mapStateToProps = ({ user }) => {
  return { user };
}

export default connect(
  mapStateToProps,
  {
    getUserList,
    updateUser
  })(User);
