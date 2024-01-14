import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../constants/firebase';
import { doc, getDoc } from 'firebase/firestore';
import useAuthStore from '../store/authStore';

const AdminLoginHook = ()=>{
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const loginUser = useAuthStore((state) => state.login);

      const signin = async (inputs) => {
        if(!inputs.email || !inputs.password){
           alert('please fill all inputs');
            return;
          }

          try {
            const authUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if(!authUser && error ){
                console.log(error);
                return;
            }

            else if(authUser){
                // console.log('got user ',authUser.user);
                const docRef = doc(firestore, 'admins', authUser.user.uid);
                const docSnap = await getDoc(docRef);
                console.log(docSnap);
                localStorage.setItem('user-info', JSON.stringify(docSnap.data()))
                loginUser(docSnap.data())
            }
          } catch (error) {
            console.log(error)
          }
      }

      return {loading, error, signin, user}
}

export default AdminLoginHook;