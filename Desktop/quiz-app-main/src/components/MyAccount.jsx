import React, { useState } from "react";
import { connect } from "react-redux";
function MyAccount({ user }) {
  console.log(user);
  const [name, setName] = useState("");
  const [is, setId] = useState("");

  return (
    <div>
      <div>
        <h1>My Account Details</h1>
        <div>
          <h2>Name:{}</h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    check:
      state.user && state.user.register && state.user.register.payload.user,
    user: state.user,
  };
};

export default connect(mapStateToProps)(MyAccount);
