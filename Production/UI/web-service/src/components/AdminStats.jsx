import { useState, useEffect } from "react";

export function AdminStats() {
  const [stats, setStats] = useState([
      {
        name: "Total Users",
        url: "http://localhost:8000/api/user/count",
        stat: "0",
      },
    {
      name: "Total Customers",
      url: "http://localhost:8000/api/customer/count",
      stat: "0",
    },
    {
      name: "Total Orders",
      url: "http://localhost:8000/api/order/count",
      stat: "0",
    },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        await Promise.all(
          stats.map(async (item, index) => {
            if (item.url) {
              const response = await fetch(item.url);

              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
  
              const data = await response.json();
              const count = Object.values(data)[0];
              stats[index].stat = count;
            }
          })
        );
        setStats([...stats]);
      } catch (error) {
        console.error(error);
        // You may want to update the state here to indicate that an error occurred.
      }
    };

    fetchStats();
  }, []); // The empty array means that this effect runs once when the component mounts.

  return (
    <div>
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
