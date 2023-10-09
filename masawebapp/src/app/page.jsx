"use client"
import Provider from "react-redux/es/components/Provider";
import store from '../store';
import Layout from '@/Layout/Layout'

export default function Home() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}
