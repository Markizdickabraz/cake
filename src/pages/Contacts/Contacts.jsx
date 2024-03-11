import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/markerMap/marker';
import { ContactsContainer } from './ContactsStyle';
import { Title } from '../About/AboutStyle';


const MapWithMarker = () => {
  const defaultCenter = { lat: 47.92948779450442, lng: 33.42509515028968 };
  const defaultZoom = 15;

  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/%D0%86%D0%B4%D0%B5%D0%B0%D0%BB/@47.9294493,33.4224929,17z/data=!4m6!3m5!1s0x40dadf8755696963:0xde4cf03b7736914c!8m2!3d47.9293442!4d33.4251114!16s%2Fg%2F1q2w8rcqb?entry=ttu', '_blank'); // Відкриваємо Google Maps у новому вікні
  };

  return (
    <ContactsContainer>
      <Title style={{ marginBottom: 20 }}>Замовляйте за номером телефону:097-------, <br /> або завітайте до фірмового магазину за адерсою вул. Бикова 20 <br /> Працюємо з 8:00 до 19:00 </Title>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDVzvwAYE4pGjx8ThRomGb-hDk178QwmHA' }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        onClick={handleMapClick}
      >
        <Marker
          lat={47.92948779450442}
          lng={33.42509515028968}
        />
      </GoogleMapReact>
    </ContactsContainer>
  );
};

export default MapWithMarker;
