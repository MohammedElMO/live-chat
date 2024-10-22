import React from "react";
import MessageFilter from "../components/MessageFilter";

function LiveMessages() {
  return (
    <section className=" flex justify-center">
      <div className="flex gap-5 mx-20">
        <MessageFilter
          activeFilter="yet-to-answer"
          filterName="Ne pas répondre"
          icon=""
        />
        <MessageFilter
          filterName="Questions répondues"
          icon=""
          activeFilter="answred"
        />
        <MessageFilter
          activeFilter="masked"
          filterName="Questions masquées"
          icon=""
        />
        <MessageFilter
          activeFilter="no-filter"
          filterName="Toutes les questions"
          icon=""
        />
      </div>
    </section>
  );
}

export default LiveMessages;
