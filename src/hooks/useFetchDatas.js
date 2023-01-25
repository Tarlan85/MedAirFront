import React, { useEffect } from 'react'
import sendRequest from '../api/sendRequest';
import { useGlobalContext } from '../context/context';

function useFetchDatas() {

    const { setManagersList, setManagersPlaces } = useGlobalContext();

    const fetchManagersTabs = async () => {
      let res = await sendRequest("managers/tabs");
      res.data.forEach(i => i.Id = i.cureTabId )
      setManagersList(res.data);
    };
    const fetchManagersPlace = async () => {
      let res = await sendRequest("managers/places");
      res.data.forEach(i => i.Id = i.visitPlaceId )
      setManagersPlaces(res.data);
    };
    
    useEffect(() => {
      fetchManagersTabs();
      fetchManagersPlace()
    }, []);
  return {}
}

export default useFetchDatas