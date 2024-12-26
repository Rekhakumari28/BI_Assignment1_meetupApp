import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "./Header";

const Events = () => {
  const [eventType, setEventType] = useState("Both");
  const [searchEvent, setSearchEvent] = useState("");

  const { data, loading, error } = useFetch(
    "https://backend-meetup.vercel.app/events"
  );
  const filterEvents =
    eventType === "Both"
      ? data
      : data.filter((event) => event.typeOfEvent === eventType);

  const handlerForSearchEvents = (event) => {
    setSearchEvent(event.target.value);
  };

  const handleSearchEvent =
    searchEvent === ""
      ? filterEvents
      : filterEvents?.filter((event) => {
          const titleMatch = event.title.toLowerCase().includes(searchEvent);
          const tagMatch = event.eventTags?.some((tag) =>
            tag.toLowerCase().includes(searchEvent)
          );
          return titleMatch || tagMatch;
        });

  return (
    <>
      <Header
        searchEventByTitalOrTag={handlerForSearchEvents}
        value={searchEvent}
      />

      <div className="container-fluid py-3 bg-body-tertiary">
        <div className="row justify-content-between ">
          <div className="col-auto">
            <h1>Meetup Events</h1>
          </div>
          <div className="col-4 ">
            <select
              id="eventType"
              className="form-select"
              onChange={(event) => setEventType(event.target.value)}
            >
              <option value="Both">Both</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container bg-body-tertiary">
        <div className="row ">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An occured while feching events.</p>
          ) : (
            handleSearchEvent &&
            (handleSearchEvent.length > 0 ? (
              handleSearchEvent.map((event) => (
                <div className="col-md-4" key={event._id}>
                  <Link
                    className="text-decoration-none"
                    to={`/eventDetail/${event.title}`}
                  >
                    <div className="card bg-body-tertiary border border-0">
                      <img
                        src={event.imageUrl}
                        className="card-img-top rounded "
                        alt={event.title}
                      />
                      <div className="card-img-overlay ">
                        <div className="row">
                          {" "}
                          <div className="col-md-4 bg-white rounded ">
                            {event.typeOfEvent}{" "}
                          </div>
                        </div>
                      </div>
                      <small>{event.startTime}</small>
                      <h2> {event.title}</h2>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>Event not found</p>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Events;
