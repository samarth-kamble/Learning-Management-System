import React from "react";
import {
  FcSalesPerformance,
  FcConferenceCall,
  FcReadingEbook,
  FcBearish,
} from "react-icons/fc";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="mx-auto grid max-w-full gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-md rounded-lg border px-6 pt-6 pb-10">
          <div className="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
            <FcSalesPerformance className="h-6 w-6" />
          </div>

          <p className="text-sm font-medium text-gray-500">Total Revenue</p>
          <p className="text-4xl font-medium text-gray-800">$24,430</p>
          <span className="float-right rounded-full bg-rose-100 px-1 text-sm font-medium text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4 pb-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
            3%
          </span>
        </div>

        <div className="max-w-md rounded-lg border px-6 pt-6 pb-10">
          <div className="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
            <FcConferenceCall className="h-6 w-6" />
          </div>

          <p className="text-sm font-medium text-gray-500">Total Users</p>
          <p className="text-4xl font-medium text-gray-800">3,405</p>
          <span className="float-right rounded-full bg-emerald-100 px-1 text-sm font-medium text-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4 pb-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
            23%
          </span>
        </div>

        <div className="max-w-md rounded-lg border px-6 pt-6 pb-10">
          <div className="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
            <FcBearish className="h-6 w-6" />
          </div>

          <p className="text-sm font-medium text-gray-500">Total Sale</p>
          <p className="text-4xl font-medium text-gray-800">24</p>
          <span className="float-right rounded-full bg-rose-100 px-1 text-sm font-medium text-rose-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-4 w-4 pb-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
            3%
          </span>
        </div>

        <div className="max-w-md rounded-lg border px-6 pt-6 pb-10">
          <div className="inline-block rounded-full border-8 border-emerald-50 bg-emerald-200 p-2 text-emerald-500">
            <FcReadingEbook className="h-6 w-6" />
          </div>
          <p className="text-sm font-medium text-gray-500">Total Courses</p>
          <p className="text-4xl font-medium text-gray-800">405</p>
        </div>
      </div>
    </div>
  );
}
