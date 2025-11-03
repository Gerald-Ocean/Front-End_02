"use client";
import { Input } from "@/components/ui/input";
import * as React from "react";

interface ISignUpPageProps {}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://neededstream-us.backendless.app/api/data/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("Sign up berhasil!");
        setEmail("");
        setPassword("");
      } else {
        alert("Sign up gagal!");
      }
    } catch (error) {
      alert("Terjadi kesalahan!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">SIGNUP PAGE</h1>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <Input 
          type="email" 
          placeholder="Input Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input 
          type="password" 
          placeholder="Input Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;

/* contoh menggunakan useRef
const emailRef = React.useRef<HTMLInputElement>(null);
const passwordRef = React.useRef<HTMLInputElement>(null);

// Function to submit
const onBtSignup=()=>{
if(emailRef.current?.value && passwordRef.current?.value) {
// call API
axios.post("https://neededstream-us.backendless.app/api/data/account",{
email: emailRef.current.value,
password: passwordRef.current.value,
})
,then((res) => {
console.log(res.data);
alert('Register success, welcome ${res.data.email}`);
})
.catch((err) => {
console.log(err);
})
} else {
  alert("Fill in all form");
}
};
*/
