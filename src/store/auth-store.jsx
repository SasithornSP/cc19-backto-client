
import {create} from "zustand"
import { actiontLogin } from "../api/auth";
import {persist} from "zustand/middleware"

//step1 create store
const authStore =(set)=>({
    user:[],
    token:null,
    actionLoginWithZustand:async(value)=>{
        try {
            const resp =await actiontLogin(value)
            // console.log("Hello, Zustand",resp);
            const {payload,token}=resp.data
            // console.log(payload.role);
            // console.log(token);
            set({user:payload,token:token})

            return {success:true, role:payload.role}
        } catch (error) {
            return {success:false,error:error.resp.data.message}
            
        }
    },
    actiontLogout:async(value)=>{
        
        set({user:[],token:null})
    }
});

//step2 Exports store
const useAuthStore = create(persist(authStore,{name:'auth-store'}));


export default useAuthStore;