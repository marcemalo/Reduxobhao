import { Container } from '../../utils';
import { useSelector } from 'react-redux';

const Karta = () => {
    const data = useSelector(state => state.searchData);
    console.log(data)

  return (
    <Container>
    <div className="w-full h-[300px] rounded-[20px] " >
        <iframe className='w-full h-[300px] rounded-[10px]' src={`https://maps.google.com/maps?q=${data.location.name}%20Dates%10Products&amp;t=&amp;z=12&amp&output=embed`}></iframe>
    </div>

  </Container>  
  )
}

export default Karta