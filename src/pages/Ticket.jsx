import React, { useEffect, useState } from "react";
import "./Ticket.scss";
import TicketFilter from "../component/tickets/TicketFilter";
import Card from "../component/tickets/Card";
import axios from "axios";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

function Ticket() {
  const [data, setData] = useState([]);

  const [filter, setFilter] = useState("new");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTicket();
  }, []);

  const getTicket = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://netfusionideal.com/api/tickets/list");
      console.log(res.data);
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  };

  const filteredTicket = data.filter((item) => {
    const matchesStatus = filter === "all" || item.status === filter;

    const emailMatch = item.email
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const idMatch = item.ticketId
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesSearch = emailMatch || idMatch;

    return matchesStatus && matchesSearch;
  });

  const handleFilterChange = (newFilter) => {
    console.log(newFilter);
    setFilter(newFilter);
  };

  return (
    <div className="ticket-container">
      <div className="header-wrapper">
        <h1>Ticket Dashboard</h1>
        <p>Manage and track all support tickets organized by status</p>
      </div>

      <TicketFilter
        onFilterChange={handleFilterChange}
        activeFilter={filter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* {isLoading? } */}

      {isLoading ? (
        <div className="loader">
          <Spiral size="40" speed="0.9" color="blue" />
          <p>Loading Ticket</p>
        </div>
      ) : filteredTicket.length === 0 ? (
        <div className="no-ticket">
          <p>No tickets found for this filter or search.</p>
        </div>
      ) : (
              <div className="ticket-feed">
                  {[...filteredTicket].reverse().map((data) => (
                      <Card key={data._id} data={data} />
                  ))}
              </div>
          )}
      </div>
  );
}

export default Ticket;

// Default values shown
<Spiral size="40" speed="0.9" color="black" />;
