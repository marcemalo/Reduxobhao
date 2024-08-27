import { Container } from '../../utils';
import { useSelector } from 'react-redux';
import img from "../../images/w.png"

const Humiditi = () => {
    const data = useSelector(state => state.searchData);
    console.log(data);
    console.log('Data:', data);
console.log('Current Data:', data?.current);




    return (
        <Container>
           <div>
           <div className=' rounded-[20px] h-[200px] mt-[50px] overflow-hidden'>
            <div className='bg-linear-color w-full h-full  rounded-[20px]'>
               <div className='flex justify-around'>
               <h1 className='text-4xl text-black mt-10 '> Humidity: {data.current.humidity}%</h1>
               <h1 className='text-4xl text-black mt-10 '>Sunset: {data.forecast.forecastday[0].astro.sunset}</h1>
               </div>
               <div className='flex justify-around mt-4'>
               <h1 className='text-4xl text-black  '>Sunrise: {data.forecast.forecastday[0].astro.sunrise}</h1>
               <h1 className='text-4xl text-black  '>UV index: {data.current.uv}</h1>
               </div>
            </div>

            
            </div>
            <div className='bg-banner bg-cover bg-center rounded-[20px] h-[500px] mt-[50px] overflow-hidden'>
           <img src={img} alt="" />
            </div>
           </div>
            
        </Container>
    );
}

export default Humiditi;
