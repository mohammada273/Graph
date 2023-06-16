import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectPersistToken } from "../shares/shareReducer";
import { useNavigate } from "react-router-dom";
import { flightListWithSaga } from "./actions";
import { selectFlightInfo } from "./slice";
import FlightItem from "../../components/home/flightItem";

export default function Home() {

  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const token = useAppSelector(selectPersistToken);
  const flightInfo = useAppSelector(selectFlightInfo);
  const [pagination, setPagination] = useState({page: 1,size: 8});

  function nextPageHandler(e) {
    e.preventDefault();
    setPagination({ ...pagination, page: 2 });
  }

  useEffect(() => {
    if (token.length === 0) {
      return navigate("/login");
    } else {
      dispatch(flightListWithSaga({ token: token, pagination: pagination }));
    }
  }, [token, navigate, pagination, dispatch]);

  return (
    <>
      {flightInfo.result.length !== 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {flightInfo.result.map((item) => {
            <FlightItem key={item} item={item} />;
          })}
        </div>
      ) : null}
      {flightInfo.result.total > pagination.page * pagination.size ? (
        <button className="px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={(e) => nextPageHandler(e)}
        >
          Load More...
        </button>
      ) : null}
    </>
  );
}
