import { signOut } from 'firebase/auth';

const isemailverified = async (auth, email) => {
  try {
    console.log("auth.currentUser.emailVerified", auth.currentUser.emailVerified)
    if (auth.currentUser && auth.currentUser.emailVerified === false) {
      console.log(auth.currentUser);
      console.log("not verified");
      await signOut(auth);
      alert(`Please verify the email: ${email}`);
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.error("Error checking email verification:", error);
  }
};

export default isemailverified;
