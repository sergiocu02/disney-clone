
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import { selectTrending } from '../features/movie/movieSlice';

const Trending = (props) => {
    const movies = useSelector(selectTrending);
    return (
        <Container>
            <h4>Trending</h4>
            <Content>
                {movies && movies.map((movie,key)=>(
                    <Wrap key = {key}>
                        {movie.id}
                        <Link to={'/detail/'+movie.id}>

                            <img src={movie.cardImg} alt ={movie.tittle}/>
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
};
const Container = styled.div`
    padding: 0 0 26px;


`;
const Content = styled.div`
    
        display: grid;
        grid-gap: 25px;
        gap:25px;
        grid-template-columns: repeat(4, minmax(0,1fr));
        
        @media (max-width: 768px){
            grid-template-columns: repeat(2, minmax(0,1fr))
        }
    
`;
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius:10px;
    box-shadow: 0px 8px 15px 5px rgba(0,0,0,0.81);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgb(250,250,250, 0.1);
    img {
        inset : 0px;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        position: absolute;
        transition: opacity 500ms ease-in-out;
        z-index: 1;
        top: 0;
    }
    &:hover{
            border-color: rgb(250,250,250, 0.8);
            transform: scale(1.05);
            box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        
        }
    
    `;

export default Trending;