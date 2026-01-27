'use client'

import { PlanType } from '@/app/types/plan'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { SetStateAction, useEffect, useState } from 'react'
import PricingSkeleton from '../../Skeleton/Pricing'

const Pricing = () => {
  const [plan, setPlan] = useState<PlanType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setPlan(data.PlanData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  //
  const [selectedCategory, setSelectedCategory] = useState<
    'monthly' | 'yearly'
  >('monthly')

  const handleCategoryChange = (
    category: SetStateAction<'monthly' | 'yearly'>
  ) => {
    setSelectedCategory(category)
  }


}

export default Pricing
