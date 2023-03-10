import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function DashboardGreeting() {
  const customerName = "John";

  const morningGreeting = `Good morning, ${customerName}!`;
  const afterNoonGreeting = `Good afternoon, ${customerName}!`;
  const eveningGreeting = `Good evening, ${customerName}!`;
  const titleGreeting =
    new Date().getHours() < 12
      ? morningGreeting
      : new Date().getHours() < 17
      ? afterNoonGreeting
      : eveningGreeting;

  return (
    <div className="mb-[60px]">
      <h2 className="text-3xl font-bold mb-6">{titleGreeting}</h2>
      <div className="flex items-center mb-3">
        <div className="bg-blue-600 rounded-xl p-1 flex items-center justify-center h-[30px] w-[30px] mr-2 shado-lg">
          <HomeIcon className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-semibold">Overview</h3>
      </div>
      <p className="text-lg">
        This is your personalized Dashboard. Check out the video below if you
        need a quick onboarding of where to find items like your{" "}
        <Link className="text-blue-600 hover:text-blue-800" to="posting">
          job posting
        </Link>
        , documents and invoices, the{" "}
        <Link className="text-blue-600 hover:text-blue-800" to="candidates">
          candidate shortlist
        </Link>
        ,{" "}
        <Link className="text-blue-600 hover:text-blue-800" to="settings">
          settings, and notifications
        </Link>
        .
      </p>
    </div>
  );
}
