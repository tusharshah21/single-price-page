import React from "react";

export default function Price() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className=" shadow-2xl karla-regular cardo md:w-[50%] w-[89%] bg-white rounded-xl">
          <div className="p-8 lg:p-10">
            <h1 className="karla-bold text-[hsl(179,62%,43%)] text-2xl pb-4">
              Join our community
            </h1>
            <p className="karla-bold text-[hsl(71,73%,54%)] text-lg lg:text-xl py-2">
              30-day, hassle-free money back guarantee
            </p>
            <p className="text-[hsl(218,22%,67%)] text-sm lg:text-lg">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 text-white ">
            <div className="bg-[hsl(179,62%,43%)] text-xl p-8 lg:p-10 lg:rounded-bl-xl">
              <h1 className="karla-bold">Monthly Subscription</h1>
              <h1 className="karla-bold text-3xl py-2 ">
                $29
                <span className="karla-regular text-lg text-[white] opacity-60 pl-4">
                  per month
                </span>
              </h1>
              <h1 className="text-lg">Full access for less than $1 a day</h1>
              <button className="mt-8 bg-[hsl(71,73%,54%)] karla-bold text-lg py-3 w-full rounded-md shadow-lg">
                {" "}
                Sign Up
              </button>
            </div>
            <div className="bg-[hsl(179,62%,43%)] p-8 lg:p-10 opacity-70 lg:rounded-br-xl">
              <h1 className="text-lg pb-4">Why Us</h1>
              <p className="opacity-60 text-md">
                Tutorials by industry experts <br />
                Peer & expert code review
                <br />
                Coding exercises
                <br />
                Access to our GitHub repos
                <br />
                Community forum
                <br />
                Flashcard decks
                <br />
                New videos every week
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
