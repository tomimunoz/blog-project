import { auth } from "../lib/firebase";

// Sign out button
export default function SignOutButton() {
    return (

    <div className="box-center">
    <button className="button" onClick={() => auth.signOut()}>Sign Out</button>
    </div>
    
    );
  }