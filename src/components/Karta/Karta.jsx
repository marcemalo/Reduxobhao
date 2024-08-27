import { Container } from '../../utils';
import { useSelector } from 'react-redux';

const Karta = () => {
    const data = useSelector(state => state.searchData);
    console.log(data);

    if (!data || !data.location || !data.location.name) {
        return (
            <>
                <div className="loader-container">
                    <div className="loader">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </>
        );
    }

    const locationName = encodeURIComponent(data.location.name);
    
    return (
        <Container>
            <div className="w-full h-[300px] rounded-[20px]">
                <iframe
                    className='w-full h-[300px] rounded-[10px]'
                    src={`https://maps.google.com/maps?q=${locationName}&t=&z=12&output=embed`}
                    frameBorder="0"
                    allowFullScreen
                    title="Google Maps"
                ></iframe>
            </div>
        </Container>
    );
}

export default Karta;