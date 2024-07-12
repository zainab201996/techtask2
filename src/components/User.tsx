import { UserInterface } from "../interface/User";
export default function UserInfo = ({ user }) => {
  return (
    <div>
      <p>First Name: {user.firstName ? user.firstName : ""}</p>
      <p>Last Name: {user.lastName ? user.lastName : ""}</p>
      <p>City: {user.city ? user.city : ""}</p>
      <p>State: {user.state ? user.state : ""}</p>
      <p>Country: {user.country ? user.country : ""}</p>
    </div>
  );
};

