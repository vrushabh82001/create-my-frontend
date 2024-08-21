"use client";

import withAuth from '@/hocs/withAuth';
import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div>
      Dashboard Page
    </div>
  )
}

export default withAuth(Dashboard)
