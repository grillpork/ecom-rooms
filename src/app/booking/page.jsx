import React from "react";

const Button = ({ name, age }) => {
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
    </>
  );
};

function Greeting({ name = "Guest" }) {
  return <h1>Hello {name}</h1>;
}


const page = () => {
  return (
    <div className="h-screen bg-yellow-900 text-black grid place-items-center text-3xl font-bold">
      Booking Page
      <Button name="John Doe" age={30} />
      <Greeting />
    </div>
  );
};

export default page;
