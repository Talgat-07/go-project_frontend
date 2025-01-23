import { Typography } from '@/ui/Typography/Typography'
import styles from './ToursFilter.module.scss'
import { CountryAndCitiesFIlter } from './api/FilterApi'
import { ToursFrames } from '../Tours/ToursFrames'
import { ToursApi } from '../Tours/api/ToursApi'
import { useEffect, useState } from 'react'

export const ToursFilter = () => {
  const { data_1, request_1, data_2, request_2 } = CountryAndCitiesFIlter()
  const { toursData, toursRequest } = ToursApi()
  const [filteredTours, setFilteredTours] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Fetch data
  useEffect(() => {
    request_1(), request_2(), toursRequest()
  }, [request_1, request_2, toursRequest])

  useEffect(() => {
    let filtered = toursData

    // If country is selected, filter by country
    if (selectedCountry) {
      filtered = filtered.filter(
        (tour) => tour.country.name === selectedCountry,
      )
    }

    if (selectedCity) {
      filtered = filtered.filter((tour) =>
        tour.country.cities.some((city) => city.name === selectedCity),
      )
    }

    if (selectedType) {
      filtered = filtered.filter((type) => type.tour_type.name === selectedType)
    }

    if (selectedCategory) {
      filtered = filtered.filter((category) =>
        category.tour_type.categories.some(
          (currentCategory) => currentCategory.name === selectedCategory,
        ),
      )
    }

    setFilteredTours(filtered)
  }, [toursData, selectedCountry, selectedCity, selectedType, selectedCategory])

  const handleCountryChange = (e) => setSelectedCountry(e.target.value)

  const handleCityChange = (e) => setSelectedCity(e.target.value)

  const handleTypeChange = (e) => setSelectedType(e.target.value)

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value)

  return (
    <section className={styles.filterSection}>
      <Typography variant='h1' className={styles.title}>
        Все туры
      </Typography>
      <section className={styles.filterContainer}>
        {/* Country dropdown */}
        <select
          name='Страны'
          className={styles.dropdownBtn}
          onChange={handleCountryChange}
        >
          <option value=''>Все страны</option>
          {data_1.map((country) => (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {/* City dropdown */}
        <select
          name='Города'
          className={styles.dropdownBtn}
          onChange={handleCityChange}
        >
          <option value=''>Все города</option>
          {data_1.map((country) =>
            country.cities.map((key) => (
              <option
                key={key.id}
                value={key.name}
                onClick={() => handleCityClick(key.name)}
                className={styles.dropdownList}
              >
                {key.name}
              </option>
            )),
          )}
        </select>
        {/* Type dropdown */}
        <select
          name='Тип'
          className={styles.dropdownBtn}
          onChange={handleTypeChange}
        >
          <option value=''>Все типы</option>
          {data_2.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        {/* Category dropdown */}
        <select
          name='Города'
          className={styles.dropdownBtn}
          onChange={handleCategoryChange}
        >
          <option value=''>Все категории</option>
          {data_1.map((category) =>
            category.cities.map((key) => (
              <option
                key={key.id}
                value={key.name}
                onClick={() => handleCategoryChange(key.name)}
                className={styles.dropdownList}
              >
                {key.name}
              </option>
            )),
          )}
        </select>
      </section>
      {filteredTours.length > 0 ? (
        <ToursFrames countries={filteredTours} />
      ) : (
        // Fallback UI
        <div>No tours available</div>
      )}
    </section>
  )
}
