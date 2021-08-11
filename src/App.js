import React from 'react';
import PropTypes from "prop-types";

 
const filmList = [
  {
    id: 1,
    name: "더랍스터",
    image: "https://mblogthumb-phinf.pstatic.net/20160702_174/thisismyproof_146745071460838jmS_JPEG/%B4%F5%B6%F8%BD%BA%C5%CD2.jpg?type=w800",
    rating: 4.5
  },
  {
    id: 2,
    name: "콜 미 바이 유어 네임",
    image: "https://i.pinimg.com/originals/ee/f8/d2/eef8d2051bfa23c01af3dd0c7d66ca71.jpg",
    rating: 4.8
  },
  {
    id: 3,
    name: "라우더 댄 밤즈",
    image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D4253359E6B71133",
    rating: 3.7
  },
  {
    id: 4,
    name: "빌리 엘리어트",
    image: "https://i.pinimg.com/originals/28/56/47/285647756238972ba80130bc57a1a6ba.jpg",
    rating: 4.3
  }
]

function Film({ name, image, rating }) {
  return <div>
          <h1>👀 {name}</h1>
          <h4>{rating}/5.0</h4>
          <img src={image} alt={name} />
         </div>;
}

Film.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {filmList.map(film => (
        <Film 
        key={film.id} 
        name={film.name} 
        image={film.image} 
        rating={film.rating} 
        />
      ))}
    </div> 
  );
}

export default App;
