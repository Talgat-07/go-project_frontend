import { useEffect, useState } from 'react'
import { MultiContainer, TourCard, Heading, SwitchButton, Loader, Typography } from '@/ui'
import { Filter } from './components/Filter/Filter.jsx'
import { useAllTours } from './api/ToursApi.js'
import { useCountries } from './api/CountriesApi.js'
import { useTourTypes } from './api/TourTypesApi.js'
import { ToursNotFound } from './components/ToursNotFound/ToursNotFound.jsx'
import { ToursPlane } from '@/app/assets/icons/ToursPlane.jsx'
import styles from './AllTours.module.scss'
import { useTranslation } from 'react-i18next'

export const AllTours = () => {
  const { t } = useTranslation()
  const { toursData, loading: loadingTours, fetchAllTours } = useAllTours()
  const { countriesData, loading: loadingCountries, fetchCountries } = useCountries()
  const { tourTypesData, loading: loadingTypes, fetchTourTypes } = useTourTypes()
  const [filters, setFilters] = useState({
    country: '',
    city: [],
    type: '',
    category: [],
  })
  const [filteredTours, setFilteredTours] = useState([])
  const displayToursCount = 9
  const [displayTours, setDisplayTours] = useState(displayToursCount)

  useEffect(() => {
    fetchCountries()
    fetchTourTypes()
    fetchAllTours()
  }, [fetchCountries, fetchTourTypes, fetchAllTours])

  useEffect(() => {
    const filtered = toursData
      .filter(tour => {
        if (!filters.country) return true
        return tour.country.name === filters.country
      })
      .filter(tour => {
        if (!filters.city.length) return true
        return tour.country.cities.some(city =>
          filters.city.includes(city.name),
        )
      })
      .filter(tour => {
        if (!filters.type) return true
        return tour.tour_type.name === filters.type
      })
      .filter(tour => {
        if (!filters.category.length) return true
        return tour.tour_type.categories.some(category =>
          filters.category.includes(category.name),
        )
      })

    setFilteredTours(filtered)
    setDisplayTours(displayToursCount)
  }, [toursData, filters])

  if (loadingTours || loadingCountries || loadingTypes) return <Loader />

  const handleFilterChange = (field, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [field]: value }))
  }

  const handleShowMore = () => {
    setDisplayTours((prevVisible) => prevVisible + displayToursCount)
  }

  const handleReset = () => {
    setFilters({
      country: '',
      city: [],
      type: '',
      category: [],
    })
  }

  return (
    <MultiContainer className={styles.allTours}>
      <div className={`${styles.circleBg} ${filteredTours.length > 0 ? '' : styles.show}`} />
      <Heading text={t("buttons.allTours")} />
      <ToursPlane className={styles.plane} />
      <ToursPlane className={styles.plane} />
      <div className={styles.filters}>
        <Filter
          label={t("filter.country")}
          options={countriesData}
          field='country'
          value={filters.country}
          onChange={handleFilterChange}
        />
        <Filter
          label={t("filter.city")}
          options={countriesData.flatMap(country => country.cities)}
          field='city'
          value={filters.city}
          onChange={handleFilterChange}
          multiple
        />
        <Filter
          label={t("filter.type")}
          options={tourTypesData}
          field='type'
          value={filters.type}
          onChange={handleFilterChange}
        />
        <Filter
          label={t("filter.category")}
          options={tourTypesData.flatMap(type => type.categories)}
          field='category'
          value={filters.category}
          onChange={handleFilterChange}
          multiple
        />
      </div>
      {filteredTours.length > 0 ? (
        <>
          <div className={styles.tours}>
            {filteredTours.slice(0, displayTours).map((item) => (
              <TourCard key={item.id} item={item} />
            ))}
          </div>
          {displayTours < filteredTours.length && (
            <SwitchButton maxWidth='230px' className={styles.btn} onClick={handleShowMore}>
              {t("buttons.showMore")}
            </SwitchButton>
          )}
        </>
      ) : (
        <ToursNotFound handleReset={handleReset} />
      )}
    </MultiContainer>
  )
}
