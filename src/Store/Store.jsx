import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CounterSlice from '../Features/Counter/CounterSlice'
import CrudSlice from '../Features/Crud/CrudSlice'

export const Store = configureStore({
    reducer:{
        counter:CounterSlice,
        user:CrudSlice
    }
})
