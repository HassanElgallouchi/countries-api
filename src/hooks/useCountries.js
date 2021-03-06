import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useCountries() {
  // get all countries
  const getAll = async () => {
    console.log("Request");
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return "No data received";
    }
  };

  // get countries by name
  const getByName = async (countryName) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return "No data received";
    }
  };

  // gey by form option
  const getByOption = async (key, value) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/${key}/${value}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return "No data received";
    }
  };

  const getByCode = async (countryCode) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      return "No data received";
    }
  };

  return {
    getAll,
    getByName,
    getByOption,
    getByCode,
  };
}
