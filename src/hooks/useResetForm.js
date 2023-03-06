import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/context';

function useResetForm({form}) {

    const {isClearForm, setIsClearForm}  = useGlobalContext();

    useEffect(() => {
        if(form && isClearForm){
            form.resetFields()
            setIsClearForm(false)
        }
    },[isClearForm])
  return {}
}

export default useResetForm