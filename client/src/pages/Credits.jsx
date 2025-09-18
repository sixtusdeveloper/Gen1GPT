import React, { useEffect, useState } from "react";
import { dummyPlans } from "../assets/assets";
import Loading from "./Loading";
import { CheckCircle2 } from "lucide-react";

const Credits = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPlans = async () => {
    setPlans(dummyPlans);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="max-w-7xl h-screen overflow-y-scroll mx-auto px-4 sm:px-4 lg:px-4 py-10 bg-gradient-to-br from-[#f3eaff] via-[#f7f7fa] to-[#e6e6ff] dark:from-[#18181b] dark:via-[#242124] dark:to-[#18181b]">
      <h2 className="text-3xl font-extrabold mb-10 text-center xl:mb-20 text-gray-800 dark:text-white tracking-tight">
        Credit Plans
      </h2>

      <div className="flex xl:flex-nowrap flex-wrap justify-center gap-4">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className={`border rounded-2xl p-8 w-80 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative bg-white dark:bg-[#23202b] ${
              plan.name === "Pro"
                ? "border-[#A456F7] ring-2 ring-[#A456F7]/30"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            {/* Plan Badge */}
            {plan.name === "Premium" && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Best Value
              </span>
            )}

            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white tracking-wide">
                {plan.name}
              </h3>
              <p className="mb-4 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#A456F7] dark:text-[#A456F7]">
                  ${plan.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {" "}
                  / {plan.credits} Credits
                </span>
              </p>

              {/* Features with check icons */}
              <ul className="space-y-2 mt-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 text-sm font-medium"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#A456F7] dark:text-[#A456F7] flex-shrink-0"
                      strokeWidth={2}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-[#A456F7] to-[#3D81F6] hover:from-[#3D81F6] hover:to-[#A456F7] active:from-[#A456F7]/80 active:to-[#3D81F6]/80 text-white font-semibold py-2.5 rounded-xl shadow transition-all duration-200 cursor-pointer text-base tracking-wide">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
