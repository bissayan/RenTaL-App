import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";

import PlacesPage from "./PlacePage";
import AccountNav from "../AccountNav.jsx";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  if (!ready) {
    return "Loading....";
  }

  // ✅ Fix: If redirect is triggered, navigate immediately
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  // ✅ Fix: Prevent accessing user.name if not logged in
  if (ready && !user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <AccountNav />

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user?.name} ({user?.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}

      {subpage === "places" && (
        <div>
          <PlacesPage />
        </div>
      )}
    </div>
  );
}
