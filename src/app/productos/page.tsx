"use client";

import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append(
          "applicationAccessKey",
          "V2-ynJBq-NXpY6-ESvuz-POMKe-XjQuv-WEpcK-cwzb1-nvw9L"
        );
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          Action: "Add",
          Properties: {},
          Rows: [
            {
              Código: "chupemelo",
            },
          ],
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow" as RequestRedirect,
        };

        try {
          const response = await fetch(
            "https://api.appsheet.com/api/v2/apps/b3244b90-c66b-41ef-af85-607a76662cf9/tables/stock/action",
            requestOptions
          );
          const result = await response.text();
          console.log(result);
        } catch (error) {
          console.log("error", error);
        }
        // const result = await response.text();
        // console.log(result);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return <div>My Component</div>;
};

export default MyComponent;
