import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Header from "../components/Header";

const EventDetail = () => {
  const { data, loading, error } = useFetch(
    "https://backend-meetup.vercel.app/events"
  );

  const eventTitle = useParams();

  const eventData = data?.find(
    (events) => events.title == eventTitle.eventTitle
  );

  return (
    <div className="bg-body-tertiary ">
      <div className="container">
        <Header />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occured while fetching events.</p>
        ) : eventData ? (
          <div className="row justify-content-between">
            <div className="col-6 py-2">
              <div className="mb-3">
                <h1>{eventData.title}</h1>
              </div>
              <div className="my-3">
                <div>Hosted By:</div>
                <h3>{eventData.hostedBy}</h3>
              </div>
              <div className="py-4">
                <img
                  src={eventData.imageUrl}
                  className="img-fluid"
                  alt={eventData.title}
                />
              </div>
              <div className="my-3">
                <h3>Details:</h3>
                <p>{eventData.details}</p>

                <h3>Additional Information:</h3>
                <p>
                  <strong>Dress Code: </strong>
                  {eventData.dressCode}
                </p>
                <p>
                  <strong>Age Restrictions: </strong>
                  {eventData.ageRestriction}
                </p>
                <h3>Event Tags: </h3>
                <div className="row ">
                  {eventData.eventTags.map((tag) => (
                    <div className="col-auto">
                      {" "}
                      <span
                        className=" bg-danger rounded text-white p-2 "
                        key={tag}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card border border-0 my-4">
                <div className="card-body ">
                  <div className="row justify-content-start p-3">
                    <div className="col-auto position-relative ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock position-absolute top-50 start-50 translate-middle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                      </svg>
                    </div>
                    <div className="col-auto">
                      <span>{eventData.startTime} to</span>
                      <br />
                      <span>{eventData.endTime} </span>
                    </div>
                  </div>
                  <div className="row justify-content-start  p-3">
                    <div className="col-auto position-relative ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt-fill position-absolute top-50 start-50 translate-middle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                      </svg>
                    </div>
                    <div className="col-auto">
                      <span>{eventData.city}</span>
                      <br />
                      <span>{eventData.address} </span>
                    </div>
                  </div>
                  <div className="row justify-content-start  p-3">
                    <div className="col-auto position-relative ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-currency-rupee position-absolute top-50 start-50 translate-middle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                      </svg>
                    </div>
                    <div className="col-auto">
                      <span>{eventData.price} </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3>Speakers: ({eventData.speakers.length})</h3>
                <div className="row justify-content-between p-3">
                  {eventData.speakers.map((speaker) => (
                    <div className="col-6 " key={speaker._id}>
                      <div
                        style={{ height: "160px", width: "160px" }}
                        className="card bg-white border border-0 shadow text-center "
                      >
                        <div className="p-2">
                          <img
                            style={{ height: "80px", width: "80px" }}
                            className="img-fluid rounded-circle "
                            src={speaker.person.imageUrl}
                            alt={speaker.person.name}
                          />
                        </div>
                        <div className="py-2 mx-2">
                          <h6>{speaker.person.name}</h6>
                          <span>{speaker.person.designation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Event not found</p>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
