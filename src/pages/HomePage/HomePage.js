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
          <h3>Welcome to YumSecrets</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo eius inventore reprehenderit alias eos facilis, ipsa est asperiores repellendus!</p>
          </div>
        </div>
        <SearchForm />
        <h1 className='text-color header-title ls-2'>
          What are your favorite cuisines?
        </h1>
        <p className='text-uppercase text-color my-3 ls-1'>
          personalize your experience
        </p>
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
