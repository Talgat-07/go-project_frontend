import { useEffect, useState } from 'react'
import { MultiContainer } from '@/ui/Multicontainer/Multicontainer.jsx'
import { TourCard } from '@/ui/TourCard/TourCard.jsx'
import { Heading } from '@/ui/Heading/Heading.jsx'
import { Filter } from '../Filter/Filter.jsx'
import { useAllTours } from './api/ToursApi.js'
import styles from './AllTours.module.scss'

export const AllTours = () => {
  const {
    countriesData,
    fetchCountries,
    tourTypesData,
    fetchTourTypes,
    toursData,
    fetchAllTours,
  } = useAllTours()
  const [filters, setFilters] = useState({
    country: '',
    city: '',
    type: '',
    category: '',
  })
  const [filteredTours, setFilteredTours] = useState([])

  useEffect(() => {
    fetchCountries()
    fetchTourTypes()
    fetchAllTours()
  }, [fetchCountries, fetchTourTypes, fetchAllTours])

  useEffect(() => {
    const filtered = toursData
      .filter(tour => filters.country ? tour.country.name === filters.country : true)
      .filter(tour => !filters.city || tour.country.cities.some(city => city.name === filters.city))
      .filter(tour => !filters.type || tour.tour_type.name === filters.type)
      .filter(tour => !filters.category || tour.tour_type.categories.some(category => category.name === filters.category))

    setFilteredTours(filtered)
  }, [toursData, filters])

  const handleFilterChange = (field, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [field]: value }))
  }

  return (
    <MultiContainer>
      <Heading text='Все туры' />
      <div className={styles.filters}>
        <Filter
          label='Страны'
          options={countriesData}
          field='country'
          value={filters.country}
          onChange={handleFilterChange}
        />
        <Filter
          label='Города'
          options={countriesData.flatMap(country => country.cities)}
          field='city'
          value={filters.city}
          onChange={handleFilterChange}
        />
        <Filter
          label='Тип'
          options={tourTypesData}
          field='type'
          value={filters.type}
          onChange={handleFilterChange}
        />
        <Filter
          label='Категории'
          options={tourTypesData.flatMap(type => type.categories)}
          field='category'
          value={filters.category}
          onChange={handleFilterChange}
        />
      </div>
      {filteredTours.length > 0 ? (
        <div className={styles.tours}>
          {filteredTours.map((item) => (
            <TourCard item={item} />
          ))}
        </div>
      ) : (
        <div>No tours available</div>
      )}
    </MultiContainer>
  )
}
