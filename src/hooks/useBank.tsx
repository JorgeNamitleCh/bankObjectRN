import React, { useEffect, useState } from 'react'
import { Bank } from '../interfaces/interfaces';
import { api } from '../api/api';

export const useBank = () => {

    const [banks, setBanks] = useState<Bank[]>([])
    const [isLoading, setIsLoadding] = useState(true);

    const getBanksList = async () => {
        try {
            const resp = await api.get(`/${'challenge/banks'}`);
            setBanks(resp.data)
            console.log(resp.data);
            setIsLoadding(false);
        } catch (e) {
            console.log(e);
            setIsLoadding(false);
        }
    }

    useEffect(() => {
        getBanksList()
    }, [])
    

    return {
        isLoading,
        banks,
        
    };
  
}
