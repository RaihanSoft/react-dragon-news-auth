import { useLoaderData } from 'react-router-dom'
import AllCaterogy from '../Components/Home/AllCaterogy'
import DragonNews from '../Components/Home/DragonNews'
import Login from '../Components/Home/Login'
const Home = () => {
  const categories = useLoaderData()





  return (
    <>
      <section className="w-11/12 mx-auto  grid justify-items-center grid-cols-12" >

        <div className="col-span-3 flex flex-col gap-3 border-4 p-5 rounded-xl  h-[560px] ">
          <h2 className='text-xl font-bold text-center ' >All Caterogy</h2>
          {
            categories.map((category, index) => <AllCaterogy key={index} category={category} />)
          }

        </div>

        <div className="col-span-6 p-5 ">
        <h2 className='text-xl font-bold text-center ' >Dragon News </h2>
          <DragonNews />
          <button className='btn mt-5 btn-primary rounded-full'>View All</button>
        </div>

        <div className="col-span-3" >
          <Login />
        </div>

      </section>
    </>
  )
}

export default Home
