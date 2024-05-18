import React from 'react'
import './HomePage.scss'
import { useMealContext } from '../../context/mealContext'
import Loader from '../../components/Loader/Loader'
import CategoryList from '../../components/Category/CategoryList'
import NotFound from '../../components/NotFound/NotFound'
import MealList from '../../components/Meal/MealList'
import SearchForm from '../../components/Header/SearchForm'

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext()

  return (
    <main className='main-content'>
      <div className='header-content flex align-center justify-center flex-column text-center mt-8'>
        <div className='parent'>
          <div className='child1'>
              
          </div>
          <div className='child2'>
          <h1>Welcome to YumSecrets</h1>
              <p>Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.!</p>
          </div>
        </div>
        <h1 className='text-color header-title ls-2'>
          What would you like to cook?
        </h1>
        <p className='text-uppercase text-color my-3 ls-1'>
          Excellence In Every Dish
        </p>
        <SearchForm />
      </div>
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ''
      )}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  )
}

export default HomePage
