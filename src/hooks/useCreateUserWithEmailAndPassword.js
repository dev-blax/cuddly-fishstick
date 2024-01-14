import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../constants/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'


const useSignupWithEmailAndPassword = ()=>{
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const signup = async (inputs)=>{
        if(!inputs.email || !inputs.password){
          console.log('please fill all inputs');
          return;
        }
        try {
          const newUser = await createUserWithEmailAndPassword(inputs.email,  inputs.password);
          if(!newUser && error){
            console.log(error);
            return;
          }

          else if(newUser){
            const userDoc = {
              uid: newUser.user.uid,
              email: inputs.email,
              createdAt: Date.now()
            }

            await setDoc(doc(firestore, "admins", newUser.user.uid), userDoc);

            localStorage.setItem("user-info", JSON.stringify(userDoc));
          }

        } catch (error) {
          console.log('error: ',error);
        }
      }

      return {loading, error, signup}
}

export default useSignupWithEmailAndPassword;