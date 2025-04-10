"use client";
import { useState } from "react";
import SignupPage from "./first";
import Signup02 from "./page2";

export default function Page() {
  const [mail, setMail] = useState("");

  return (
    <div>
      {!mail ? <SignupPage setMail={setMail} /> : <Signup02 mail={mail} />}
    </div>
  );
}
