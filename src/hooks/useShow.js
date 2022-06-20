import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../Constants/request";

const useShow = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState();
  const getShow = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`);
      console.log(data);
      setShow(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getShow();
    // console.log(show);
  }, []);

  return [show, isLoading];
};

export default useShow;
