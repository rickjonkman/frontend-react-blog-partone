
import {useParams} from "react-router-dom";

function Blogpost() {
    const { blogId } = useParams();

    return (
        <>
            <h1>{blogId}</h1>
        </>
    )
}

export default Blogpost;