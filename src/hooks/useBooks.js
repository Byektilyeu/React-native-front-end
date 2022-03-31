import { useState, useEffect } from "react";
import axios from "axios";

export default (categoryId, searchServerValue) => {
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBook = (searchValue) => {
    console.log(searchValue + "tulhuur ugeer search ehellee");
  };

  useEffect(() => {
    let limit = 3;
    let search = "";

    if (searchServerValue) {
      limit = 50;
      search = `&search=${searchServerValue}`;
    }

    setLoading(true);

    axios
      .get(
        `http://10.0.0.105:8000/api/v1/categories/${categoryId}/books?limit=${limit}${search}`
      )
      .then((result) => {
        console.log("nomnuudiig amjillttai huleej avlaa ");
        setBooks(result.data.data);
        setErrorMessage(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Уучлаарай сэрвэр дээр энэ өггөдөл байхгүй байна";
        else if (message === "Network Error")
          message =
            "Сэрвэр ажиллахгүй байна. Та түр хүлээгээд дахин оролдоно уу";
        setErrorMessage(message);
      });
  }, [categoryId, searchServerValue]);

  return [books, errorMessage, searchBook, loading];
};
