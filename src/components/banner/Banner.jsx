import { Container } from '../../utils';
import { useSelector } from 'react-redux';

const Banner = () => {
  const data = useSelector(state => state.searchData);
  console.log(data)
  return (
    <Container>
      <div className='bg-banner bg-cover bg-center rounded-[20px] h-[400px] mt-[50px] overflow-hidden'>
        <div className='bg-linear-color w-full h-full'>
          {
            data &&

            <div className='mt-[70px] flex align-middle justify-between'>
              <div className=' ml-7'>
                <img className='w-[100px]' src={data.current.condition.icon} alt="" />
                <h1 className='text-9xl text-white'>{data.current.temp_c}°</h1>
                <h1 className='text-4xl text-white'> {data.location.name}: {data.location.country}</h1>
              </div>
              <div className='mr-10 mt-44'>
                <h1 className='text-4xl text-slate-50 mt-12'>{data.current.condition.text}</h1>
              </div>
            </div>
          }
        </div>
      </div>

    </Container>
  )
}

export default Banner

// https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=Tashkent&days=7&aqi=yes&alerts=yes