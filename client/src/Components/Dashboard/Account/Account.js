import React from "react";
import "../Account/Account.css";

const Account = () => {
  return (
    <form className="account-container">
      <h3 className="">Change Name</h3>
      <input type="text" placeholder={localStorage.getItem("username")} />
      <button>Update Username</button>
    </form>
  );
};

export default Account;
