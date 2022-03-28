import {useParams} from 'react-router-dom';

function AnimalDetail() {

    const {id} = useParams();

    return (
        <h1>One Animal {id}</h1>
    )
}

export default AnimalDetail;