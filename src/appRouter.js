import React from 'react'
import CandidatePage from 'pages/CandidatePage/CandidatePage'
import ErrorPage from 'pages/ErrorPage/ErrorPage'
import HomePage from 'pages/HomePage/HomePage'
import JobPostingPage from 'pages/JobPostingPage/JobPostingPage'
import OrderStatusPage from 'pages/OrderStatusPage/OrderStatusPage'
import ROICalculatorPage from 'pages/ROICalculatorPage/ROICalculatorPage'
import ShortlistPage from 'pages/ShortlistPage/ShortlistPage'
import Root from 'pages/Root/Root'
import { createBrowserRouter } from 'react-router-dom'
import SettingsPage from 'pages/SettingsPage/SettingsPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'status',
        element: <OrderStatusPage />,
      },
      {
        path: 'calculator',
        element: <ROICalculatorPage />,
      },
      {
        path: 'posting',
        element: <JobPostingPage />,
      },
      {
        path: 'candidates',
        element: <ShortlistPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'candidates/:candidateId',
        element: <CandidatePage />,
      },
    ],
  },
])
