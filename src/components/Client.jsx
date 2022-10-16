import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Client = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row px-[50px] gap-[30px] sm:gap-[100px] items-center justify-center mt-10">
      {clients.map((client) => (
        <div
          className="flex flex-1 sm:min-w-[192px] min-w-[150px]"
          key={client.id}
        >
          <img
            className="sm:w-[192px] w-[150px] object-contain"
            src={client.logo}
            alt=""
          />
        </div>
      ))}
    </section>
  );
};

export default Client;
