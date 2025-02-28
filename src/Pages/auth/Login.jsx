
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../component/Form/FormInput";
import Button from "../../component/Form/Button";
import { useNavigate } from "react-router";

//Validator
import { loginSchema} from "../../utils/validators";
// import {z} from "@hookform/resolvers"
import { zodResolver } from "@hookform/resolvers/zod";
import { actiontLogin } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

function Login() {

//Zustand
const actionLoginWithZustand =useAuthStore((state)=>state.actionLoginWithZustand)


  const navigate =useNavigate()
  const { register, handleSubmit,formState,reset } = useForm({
    resolver:zodResolver(loginSchema)
  });
  const {isSubmitting,errors} = formState
console.log(errors);

  const hdlSubmit = async (value) => {
    //Delay
    // await new Promise((resolve)=>setTimeout(resolve,2000))
 
      const resp =await actionLoginWithZustand(value)
      if(resp.success){
        roleRedirect(resp.role);
        reset()
        createAlert("success","Welcome,back")
      }else{
        createAlert("info","Something wrong!!!")
      }
      // const resp = await actiontLogin(value)
      // const role = resp.data.payload.role
  
  };
  const roleRedirect =(role)=>{
    if(role === "ADMIN"){
      navigate("/admin")
    }else{
      navigate('/user')
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Login</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput register={register} name="password" errors={errors} type="password"/>
          </div>

          <div className="flex justify-center">
            < Button isSubmitting={isSubmitting} Label="Login"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
