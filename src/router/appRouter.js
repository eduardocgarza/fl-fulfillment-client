import React from 'react'
import CandidatePage from 'pages/EmployersView/CandidatePage/CandidatePage'
import ErrorPage from 'pages/ErrorPage/ErrorPage'
import DashboardPage from 'pages/EmployersView/DashboardPage/DashboardPage'
import JobPostingPage from 'pages/EmployersView/JobPostingPage/JobPostingPage'
import OrderStatusPage from 'pages/EmployersView/OrderStatusPage/OrderStatusPage'
import ROICalculatorPage from 'pages/EmployersView/ROICalculatorPage/ROICalculatorPage'
import ShortlistPage from 'pages/EmployersView/ShortlistPage/ShortlistPage'
import { createBrowserRouter } from 'react-router-dom'
import SettingsPage from 'pages/EmployersView/SettingsPage/SettingsPage'
import ClusterRoot from 'pages/Roots/ClusterRoot'
import RecruiterDashboardPage from 'pages/RecruitersView/RecruiterDashboardPage/RecruiterDashboardPage'
import RecruitersRoot from 'pages/Roots/RecruitersRoot'
import RecruiterClientsPage from 'pages/RecruitersView/RecruiterClientsPage/RecruiterClientsPage'
import RecruiterSettingsPage from 'pages/RecruitersView/RecruiterSettingsPage/RecruiterSettingsPage'
import CreateCluster from 'pages/RecruitersView/CreateCluster/CreateCluster'
import RecruiterAnalyticsPage from 'pages/RecruitersView/RecruiterAnalyticsPage/RecruiterAnalyticsPage'
import PublicRoot from 'pages/Roots/PublicRoot'
import PublicEmployersPage from 'pages/CandidatesView/PublicEmployersPage/PublicEmployersPage'
import PublicEmployersPostingPage from 'pages/CandidatesView/PublicEmployersPostingPage/PublicEmployersPostingPage'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RecruitersRoot />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: '',
        element: <RecruiterDashboardPage />,
      },
      {
        path: 'clients',
        element: <RecruiterClientsPage />,
      },
      {
        path: 'create',
        element: <CreateCluster />,
      },
      {
        path: 'settings',
        element: <RecruiterSettingsPage />,
      },
      {
        path: 'analytics',
        element: <RecruiterAnalyticsPage />,
      },
    ],
  },
  {
    path: '/em/:employerName',
    element: <ClusterRoot />,
    children: [
      {
        path: '',
        element: <DashboardPage />,
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
  {
    path: "/post/:agencyName/:companyName",
    element: <PublicRoot />,
    children: [
      {
        path: '',
        element: <PublicEmployersPage />,
      },
      {
        path: ':postId',
        element: <PublicEmployersPostingPage />,
      }
    ]
  }
])
